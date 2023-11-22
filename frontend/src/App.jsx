import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Favourites from "./pages/favourites"
import Popular from "./pages/popular"

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
])
function App() {
  return <RouterProvider router={router} />
}

export default App
