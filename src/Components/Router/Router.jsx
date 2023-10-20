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
import Samble from "../SambleProduct/Samble";
import Error from "../Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <Error />,
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
        loader : () => fetch('https://assignmant-10-server.vercel.app/addlaptop')
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
        path : '/samble',
        element : <Samble />,
        
      },
      {
        path: "/brandcard/:brand_name",
        element: <BrandCard />,
        loader: () => fetch("https://assignmant-10-server.vercel.app/laptop"),
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
          fetch(`https://assignmant-10-server.vercel.app/laptop/${params.id}`),
      },
      {
        path: "/detailscard/:id",
        element: (
          <PrivateRout>
            <DetailsCard />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`https://assignmant-10-server.vercel.app/laptop/${params.id}`),
      },

     
    ],
  },
]);
export default router;
