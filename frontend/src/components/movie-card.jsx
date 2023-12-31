/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function MovieCard({ movie, isFavourite = false }) {
  const { title, poster_path, vote_average, id } = movie

  return (
    <Link
      to={`${isFavourite ? `/favourites/${id}` : `/movie/${id}`}`}
      className="relative w-full overflow-hidden rounded-md shadow-lg h-80 group"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className="absolute object-contain w-full h-full rounded-md lg:object-fill"
      />

      <div className="absolute bottom-0 w-full h-24 p-5 transition-transform translate-y-24 lg:group-hover:-translate-y-0 backdrop-blur-sm bg-black/90">
        <p
          className={`${
            title.length > 10 ? "text-sm" : "text-xl"
          } font-bold text-white`}
        >
          {title}
        </p>
        <p className="font-semibold text-white">
          <span className="font-bold text-yellow-500">{vote_average}</span> / 10
        </p>
      </div>
    </Link>
  )
}
