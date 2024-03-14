import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Quiz from './Quiz';
import { jsQuizz } from './Constants';
import Home from './Home';
import AboutUs from './AboutUs';
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
      children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/quiz/:categoryId",
            element:<Quiz/>
        },
        {
            path:"/aboutus",
            element:<AboutUs />
        },
      ]
    },
  ]);


ReactDOM.createRoot(document.getElementById("root")).render( <RouterProvider router={router} />);
AOS.init();

