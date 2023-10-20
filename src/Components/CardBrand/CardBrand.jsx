import React from "react";
import { Link } from "react-router-dom";

const CardBrand = ({ brandCard }) => {
  const { _id, name, brand, price, rating, photo } = brandCard;
  return (
    <div>
      <div className=" p-7 bg-gradient-to-t from-gray-300 shadow-lg md:h-72 rounded-b-2xl font-philospar flex flex-col md:flex-row items-center justify-between">
        <img className="md:w-80" src={photo} alt="" />
        <div>
          <p className="capitalize text-gray-500">
            <span className="text-lg text-sky-950 font-semibold">Name : </span>
            {name}
          </p>
          <p className="capitalize text-gray-500">
            <span className="text-lg text-sky-950 font-semibold">
              Brand N :{" "}
            </span>
            {brand}
          </p>
          <p className="capitalize text-gray-500">
            <span className="text-lg text-sky-950 font-semibold">
              Rating :{" "}
            </span>
            {rating}
          </p>
          <p className="capitalize text-gray-500">
            <span className="text-lg text-sky-950 font-semibold">Price : </span>
            {price}
          </p>
          <div className="flex gap-3 mt-3">
            <Link to={`/detailsCard/${_id}`}>
              <button className="bg-green-500 px-3 text-white rounded">
                Details
              </button>
            </Link>
            <Link to={`/updateData/${_id}`}>
              <button className="bg-sky-500 px-3 text-white rounded">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBrand;
