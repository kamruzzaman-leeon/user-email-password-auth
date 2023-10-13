import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./component/Root";
import Home from "./component/Home";
import Login from "./component/LogIn";
import Register from "./component/Register";
import {  HelmetProvider } from 'react-helmet-async';
import RegisterHero from "./component/RegisterHero";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/register",
      element:<Register></Register>,
    },
    {
      path:"/register-hero",
      element: <RegisterHero></RegisterHero>,
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router = {router}/>
    </HelmetProvider>
  </React.StrictMode>
);