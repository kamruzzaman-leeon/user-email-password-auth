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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/register",
      element:<Register></Register>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);