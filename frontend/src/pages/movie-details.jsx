import { useParams } from "react-router-dom"
import Header from "../components/header"
import { useFetch } from "../hooks/useFetch"
import { API_URL, currencyFormatter, formatMinutesToHours } from "../utils"
import BackButton from "../components/back-button"
import Button from "../components/button"
import { useCookies } from "react-cookie"
import { toast } from "react-hot-toast"
import { useState } from "react"

export default function MovieDetails() {
  const { movieId } = useParams()
  const [cookies, setCookie] = useCookies(["gyzer_movie_user_id"])
  const [isAdding, setIsAdding] = useState(false)

  const { data: movie, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )

  async function handleAddMovieToFavourite() {
    setIsAdding(true)
    const randomString =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    if (!cookies.gyzer_movie_user_id) {
      setCookie("gyzer_movie_user_id", randomString, {
        maxAge: 365 * 60 * 60 * 24,
        path: "/",
        sameSite: "lax",
      })
    }

    const moviePayload = {
      backdrop_path: movie?.backdrop_path,
      id: movie?.id,
      overview: movie?.overview,
      poster_path: movie?.poster_path,
      title: movie?.title,
      vote_average: movie?.vote_average,
      budget: movie?.budget,
      revenue: movie?.revenue,
      runtime: movie?.runtime,
      release_date: movie?.release_date,
      genres: movie?.genres,
    }

    const request = await fetch(`${API_URL}/api/favourites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: cookies.gyzer_movie_user_id,
        movie: moviePayload,
      }),
    })

    const response = await request.json()

    if (response.status == 201 || response.status == 200) {
      toast.success(response.message)
    } else {
      toast.error(response.message)
    }
    setIsAdding(false)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-950">
        <p className="text-xl font-bold text-white animate-pulse">
          Loading....
        </p>
      </div>
    )
  }

  return (
    <>
      <Header />

      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-gray-950"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="container relative z-40 px-5 py-4">
          <BackButton />
        </div>
        <div className="absolute inset-0 z-10 bg-black/80" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen gap-5 px-5 lg:flex-row md:px-10 lg:px-40 md:gap-7 lg:gap-10">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
              alt={movie?.original_title}
              className="w-full h-full rounded-sm md:w-96 md:h-96 lg:w-[25rem] lg:h-[25rem] "
            />
          </div>

          {/* text */}

          <div className="w-full space-y-2">
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {movie?.title}
            </h1>

            <p className="text-white/80">{movie?.overview}</p>

            <div className="flex flex-col w-full gap-10 pb-10 md:items-center md:gap-20 md:flex-row md:pb-0">
              <div className="space-y-2 ">
                {/* rating */}
                <p className="font-semibold text-white">
                  <span className="mr-2">Rating:</span>
                  <span className="font-bold text-yellow-500">
                    {movie?.vote_average.toFixed(1)}
                  </span>{" "}
                  / 10
                </p>

                {/* genres */}
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-white">Genres:</p>
                  <ul className="flex items-center gap-4">
                    {movie?.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="px-3 py-1 text-sm text-white rounded-md bg-gray-950 "
                      >
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* runtime */}
                <p className="font-semibold text-white">
                  Runtime: {formatMinutesToHours(movie?.runtime)}{" "}
                </p>

                {/* budget */}
                <p className="font-semibold text-white">
                  Budget:
                  <span className="pl-2">
                    $ {currencyFormatter.format(movie?.budget)}{" "}
                  </span>
                </p>

                {/* revenue */}
                <p className="font-semibold text-white">
                  Revenue:
                  <span className="pl-2">
                    $ {currencyFormatter.format(movie?.revenue)}{" "}
                  </span>
                </p>

                {/* release date */}
                <p className="font-semibold text-white">
                  Release Date: {new Date(movie?.release_date).toDateString()}
                </p>
              </div>

              <Button onClick={handleAddMovieToFavourite}>
                {isAdding ? "Adding...." : "Add To Favourites"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
