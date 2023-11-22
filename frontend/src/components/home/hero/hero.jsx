import { data } from "../../../utils/data"
function HeroSection() {
  const movie = data.results[1]

  console.log(movie)
  return (
    <section
      className="bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="flex w-full min-h-screen justify-center items-center h-screen relative px-5 md:px-10 lg:px-40 gap-5 md:gap-7 lg:gap-10">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.original_title}
            className="w-full h-full md:w-80 md:h-80 lg:w-96 lg:h-96 "
          />
        </div>

        {/* text */}

        <div className="w-full space-y-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            {movie.title}
          </h1>

          <p className="text-white/80">{movie.overview}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
