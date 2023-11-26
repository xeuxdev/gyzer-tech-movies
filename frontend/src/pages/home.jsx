import { useEffect, useState } from "react"
import Header from "../components/header"
import HeroSection from "../components/home/hero"
import Movies from "../components/home/movies"
import Loader from "../components/loader/loading"

export default function Home() {
  const [currPage, setCurrPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const randomMovieIndex = Math.floor(Math.random() * movies.length - 1)

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      const request = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${currPage}`
      )

      const response = await request.json()

      setMovies((prev) => {
        return [...prev, ...response.results]
      })
      setIsLoading(false)
    }

    fetchData()
  }, [currPage])

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (movies.length == 0) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gray-950">
        <p className="text-xl font-bold text-white">Loading....</p>
      </div>
    )
  }

  return (
    <section className="bg-gray-950">
      <Header />

      <HeroSection movie={movies?.[randomMovieIndex]} />
      <Movies movies={movies} />
      {isLoading && <Loader />}
    </section>
  )
}
