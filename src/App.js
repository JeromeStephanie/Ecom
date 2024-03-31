import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'
import { productData } from './Api/Api'
import Product from './Components/Product'
import Login from './Pages/Login'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: productData
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  }
])

function App () {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
