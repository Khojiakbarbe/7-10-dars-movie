
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Search from './pages/Search'
import Series from './pages/Series'
import SinglePage from './pages/SinglePage'
import Trending from './pages/Trending'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />,
      children:[
        {
          path:'/',
          element:<Trending />
        },
        {
          path:'/movies',
          element:<Movies />
        },
        {
          path:'/series',
          element:<Series />
        },
        {
          path:'/search',
          element:<Search />
        },
        {
          path:'/full_info',
          element:<SinglePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App