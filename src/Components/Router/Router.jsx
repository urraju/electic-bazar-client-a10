import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import MyCard from "../pages/MyCard";
import AddProduct from "../pages/AddProduct";
import HomeCard from "../HomeCard/HomeCard";
import BrandCard from "../brandAllCard/BrandCard";
import Slider from "../Slider/Slider";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRout from "../Private/PrivateRout";
import UpdateData from "../UpdateData/UpdateData";
import DetailsCard from "../Details/DetailsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/laptop.json"),
      },
      {
        path: "/mycard",
        element: (
          <PrivateRout>
            <MyCard />,
          </PrivateRout>
          
        ),
        loader : () => fetch('http://localhost:3017/addlaptop')
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRout>
            <AddProduct />
          </PrivateRout>
        ),
      },
      {
        path: "/brandcard/:name",
        element: <BrandCard />,
        loader: () => fetch("http://localhost:3017/laptop"),
      },
      {
        path: "/homecard",
        element: <HomeCard />,
      },
      {
        path: "/slider",
        element: <Slider />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/updatedata/:id",
        element: (
          <PrivateRout>
            <UpdateData />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3017/laptop/${params.id}`),
      },
      {
        path: "/detailscard/:id",
        element: (
          <PrivateRout>
            <DetailsCard />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3017/laptop/${params.id}`),
      },
    ],
  },
]);
export default router;
