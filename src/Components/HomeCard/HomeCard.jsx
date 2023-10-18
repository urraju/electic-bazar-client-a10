import React from "react";
import { NavLink } from "react-router-dom";

const HomeCard = ({ cardData }) => {
  const { id, img, name, brand_name } = cardData;

  return (
    <div className="">
      <NavLink to={`/brandcard/${name}`}>
        <div className="p-5 shadow-xl rounded-xl h-72 flex   ">
          <div className="">
            <img className="w-full mx-auto " src={img} alt="" />
            <div className="  font-philospar ml-6">
              <p className="capitalize">
                <span className="text-lg font-bold">Name : </span>
                {name}
              </p>
              <p className="capitalize">
                <span className="text-lg font-bold">Brand Name : </span>
                {brand_name}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default HomeCard;
