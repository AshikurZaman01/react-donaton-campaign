import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Layouts/MainLayouts';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import Product from './Components/Products/Product';
import Banner from './Components/Header/Banner/Banner';


const router = createBrowserRouter([
  {
    path: "/",
    
    element: <MainLayouts></MainLayouts>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element : <Home></Home>,
        loader : () => fetch('/data.json')
      },
      {
        path: "/donation",
        element : <Donation></Donation>
      },
      {
        path: "/statistics",
        element : <Statistics></Statistics>,
        loader : () => fetch('/data.json')

      },
      {
        path : "/products/:id",
        element : <Product></Product>,
        loader : () => fetch('/data.json')
      },
      {
        path : "/products/:findData",
        element : <Banner></Banner>,
        loader : () => fetch('/data.json')
      }      
    ]
    
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
