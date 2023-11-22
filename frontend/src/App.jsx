import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Favourites from "./pages/favourites"
import Popular from "./pages/popular"
import MovieDetails from "./pages/movie-details"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
  {
    path: "popular",
    element: <Popular />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetails />,
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
