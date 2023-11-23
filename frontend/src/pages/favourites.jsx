import Header from "../components/header"
import { useCookies } from "react-cookie"
import { useFetch } from "../hooks/useFetch"
import MovieCard from "../components/movie-card"
import { useEffect, useState } from "react"
import { API_URL } from "../utils"

export default function Favourites() {
  const [cookies] = useCookies(["gyzer_movie_user_id"])
  const [movies, setMovies] = useState([])

  const url = `${API_URL}/api/${cookies.gyzer_movie_user_id}/favourites`

  const { data, isLoading } = useFetch(url)

  useEffect(() => {
    setMovies(data?.movies)
  }, [cookies.gyzer_movie_user_id, data, url])

  if (isLoading || !data?.movies) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-950">
        <p className="text-2xl font-bold">Loading....</p>
      </div>
    )
  }

  return (
    <>
      <Header />

      <section className="min-h-screen py-10 bg-gray-950">
        <div className="container px-5">
          <h2 className="text-3xl font-bold text-white">Favourites</h2>

          <div className="py-8">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-10 lg:grid-cols-4">
              {/* card */}
              {movies?.length == 0 ? (
                <div>
                  <p className="text-white">No Favourites yet</p>
                </div>
              ) : (
                movies?.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} isFavourite={true} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
