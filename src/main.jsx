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


const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children : [
      {
        path: "/",
        element : <Home></Home>,
        loader : () => fetch('data.json')
      },
      {
        path: "/donation",
        element : <Donation></Donation>
      },
      {
        path: "/statistics",
        element : <Statistics></Statistics>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
