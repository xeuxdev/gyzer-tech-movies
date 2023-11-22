import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  return (
    <header className="w-full h-16 bg-gray-950 ">
      <nav className="container flex items-center justify-between h-full px-5">
        {/* logo */}

        <Link to={"/"} className="text-2xl italic font-bold text-blue-500">
          Gyzer
        </Link>

        {/* links */}

        <div className="flex">
          <div className="flex items-center gap-5">
            {["popular", "favourites"].map((item, index) => {
              const isActive = location.pathname === `/${item}`

              return (
                <Link
                  key={item + index}
                  to={`/${item}`}
                  className={`${
                    isActive ? "underline underline-offset-8" : ""
                  } capitalize font-medium hover:underline hover:underline-offset-8 transition-all duration-300 text-white`}
                >
                  {item}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}
