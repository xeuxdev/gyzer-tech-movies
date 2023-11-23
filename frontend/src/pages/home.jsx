import Header from "../components/header"
import HeroSection from "../components/home/hero"
import Movies from "../components/home/movies"
import { useFetch } from "../hooks/useFetch"

export default function Home() {
  const { data, isLoading } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=${1}`
  )

  const randomMovieIndex = Math.floor(Math.random() * data?.results.length - 1)

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

      <HeroSection movie={data?.results[randomMovieIndex]} />
      <Movies movies={data?.results} />
    </>
  )
}
