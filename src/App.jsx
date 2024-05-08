import { createBrowserRouter, RouterProvider } from "react-router-dom"
// pages  
import { Cart, Checkout, HomeLayout, Landing, Orders, Products, SingleProduct, Login, Register, Error, About } from "./pages"
import { ErrorElement } from "./components";

import { loader as LandingLoader } from './pages/Landing'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import { loader as ProductsLoader } from './pages/Products'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <Error/>,
      children:[
        {
          index: true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: LandingLoader,
        },
        {
          path: "/products",
          element: <Products/>,
          loader: ProductsLoader,
        },
        {
          path: "/products/:id",
          element: <SingleProduct/>,
          loader: SingleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/checkout",
          element: <Checkout/>
        },
        {
          path: "/orders",
          element: <Orders/>,
        },
        {
          path: "/about",
          element: <About/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
      errorElement: <Error/>,
    },
    {
      path: "/register",
      element: <Register/>,
      errorElement: <Error/>,
    }
  ]);
  return <RouterProvider router={routes}/>
}

export default App