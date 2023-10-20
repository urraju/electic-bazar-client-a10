import React from "react";
import { NavLink } from "react-router-dom";

const HomeCard = ({ cardData }) => {
  const { id, img, name, brand_name } = cardData;

  return (
    <div className="">
      <NavLink to={`/brandcard/${brand_name}`}>
        <div className="p-4 bg-gradient-to-t shadow-xl to-gray from-blue-200 rounded-xl border-sky-500 ">
          <div className="">
            <img className="w-full mx-auto " src={img} alt="" />
            <div className="  font-philospar ml-6">
              <p className="capitalize text-2xl text-center text-gray-400">
                
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
