import React from "react"
import { useParams } from "react-router-dom"
import Header from "../components/header"
import { useFetch } from "../hooks/useFetch"
import { formatMinutesToHours } from "../utils"
import BackButton from "../components/back-button"

export default function MovieDetails() {
  const { movieId } = useParams()

  const { data: movie, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-950">
        <p className="text-xl font-bold">Loading....</p>
      </div>
    )
  }

  return (
    <>
      <Header />

      <section
        className="relative bg-no-repeat bg-cover bg-gray-950"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="container relative z-40 pt-4">
          <BackButton />
        </div>
        <div className="absolute inset-0 z-10 bg-black/80" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-screen min-h-screen gap-5 px-5 lg:flex-row md:px-10 lg:px-40 md:gap-7 lg:gap-10">
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

            <p className="font-semibold text-white">
              <span className="mr-2">Rating:</span>
              <span className="font-bold text-yellow-500">
                {movie?.vote_average.toFixed(1)}
              </span>{" "}
              / 10
            </p>

            <div>
              <p className="text-white">Genres:</p>
              <ul>
                {movie?.genres.map((genre) => (
                  <li key={genre.id} className="text-white">
                    {genre.name}
                  </li>
                ))}
              </ul>

              <p className="text-white">
                Runtime: {formatMinutesToHours(movie?.runtime)}{" "}
              </p>

              <p className="text-white">
                Revenue:
                <span className="pl-2">
                  {new Intl.NumberFormat("en-US", {
                    currency: "USD",
                    currencyDisplay: "symbol",
                    maximumFractionDigits: 2,
                  }).format(movie?.revenue)}{" "}
                </span>
              </p>

              <p className="text-white">
                Release Date: {new Date(movie?.release_date).toDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
