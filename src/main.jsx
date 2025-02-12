import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeHomePage from "./Pages/Homepage/EmployeeHomePage.jsx";
import HREmployeePage from "./Pages/Homepage/HRHomepage.jsx";
import Login from "./Pages/LoginPage/Login.jsx";
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element :  <App />,
    children : [
      {
        path:"/employee-home-page",
        element : <EmployeeHomePage/>
      },
      {
        path:"/hr-home-page",
        element : <HREmployeePage/>
      },
      {
        path:"/",
        element : <Login/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
