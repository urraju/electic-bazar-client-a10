import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsCard = () => {
  const detailsData = useLoaderData();
  const { name, brand, price, type, description, rating, photo } =
    detailsData;
  const handleAdd = () => {
    fetch("http://localhost:3017/addlaptop", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(detailsData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="w-full">
      <div className="md:w-9/12 mx-auto p-3">
        <div className="bg-gradient-to-t p-8 rounded-xl to-violet-800 from-black">
          <img className="lg:w-7/12 mx-auto" src={photo} alt="" />
          <div className="bg-gray-300 w-full mb-2 h-[1px] font-philospar"></div>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">Name : </span>
            {name}
          </p>
          <p className="text-gray-400 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Description :{" "}
            </span>
            {description}
          </p>
          <p className="text-teal-600 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Brand :{" "}
            </span>
            {brand}
          </p>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Type :{" "}
            </span>
            {type}
          </p>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Price :{" "}
            </span>
            {price}
          </p>
          <p className="text-rose-500 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Rating :{" "}
            </span>
            {rating}
          </p>
          <div className="w-full flex items-center justify-center ">
            <Link>
              <button
                onClick={handleAdd}
                className="text-white mt-2 bg-gradient-to-t font-philospar border-b  border-gray-700 rounded  px-6 py-2"
              >
                Add To Card
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
