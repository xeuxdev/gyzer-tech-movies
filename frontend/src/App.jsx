import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Favourites from "./pages/favourites"
import MovieDetails from "./pages/movie-details"
import { CookiesProvider } from "react-cookie"
import { Toaster } from "react-hot-toast"
import FavouriteMovieDetails from "./pages/favourite-movie-details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/movie/:movieId",
    element: <MovieDetails />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
  {
    path: "favourites/:movieId",
    element: <FavouriteMovieDetails />,
  },
])
function App() {
  return (
    <>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 2500,
        }}
      />
    </>
  )
}

export default App
