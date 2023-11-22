import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  return (
    <header className="h-16 w-full ">
      <nav className="container flex items-center justify-between h-full">
        {/* logo */}

        <Link to={"/"} className="font-bold text-2xl italic text-blue-500">
          Gyzer
        </Link>

        {/* links */}

        <div className="hidden md:flex">
          <div className="flex items-center gap-5">
            {["popular", "favourites"].map((item, index) => {
              const isActive = location.pathname === `/${item}`
              console.log(location.pathname)

              return (
                <Link
                  key={item + index}
                  to={`/${item}`}
                  className={`${
                    isActive ? "underline underline-offset-8" : ""
                  } capitalize font-medium hover:underline hover:underline-offset-8 transition-all duration-300`}
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
