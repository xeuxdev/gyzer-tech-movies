/* eslint-disable react/prop-types */
function HeroSection({ movie }) {
  return (
    <section
      className="relative py-20 bg-no-repeat bg-cover bg-gray-950 sm:py-5"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center justify-center w-full h-screen min-h-screen gap-5 px-5 py-10 lg:flex-row md:px-10 lg:px-40 md:gap-7 lg:gap-10">
        <div className="w-full h-full rounded-sm md:w-96 md:h-96 lg:w-[25rem] lg:h-[25rem] pt-20 sm:pt-0">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt={movie?.original_title}
            className="w-full h-full "
          />
        </div>

        {/* text */}

        <div className="w-full space-y-2">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {movie?.title}
          </h1>

          <p className="text-white/80">{movie?.overview}</p>

          <p className="font-semibold text-white">
            <span className="font-bold text-yellow-500">
              {movie?.vote_average}
            </span>{" "}
            / 10
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
