/* eslint-disable react/prop-types */
import MovieCard from "../movie-card"

export default function Movies({ movies }) {
  return (
    <section className="py-10 bg-gray-950">
      <div className="container px-5">
        <h2 className="text-3xl font-bold text-white">Movies</h2>

        <div className="py-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-10 lg:grid-cols-4">
            {/* card */}
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id + movie.title + Math.random() * 20}
                movie={movie}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
