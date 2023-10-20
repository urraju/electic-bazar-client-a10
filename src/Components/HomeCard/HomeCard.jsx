import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const HomeCard = ({ cardData }) => {
  const { id, img, name, brand_name } = cardData;

  return (
    <div className="">
      <NavLink to={`/brandcard/${brand_name}`}>
        <div className="py-2 bg-gradient-to-tr shadow-xl to-gray from-gray-200 rounded-xl  ">
          <div className="">
            <img className="w-full mx-auto " src={img} alt="" />
            <div className="  font-philospar ml-6">
              <p className="capitalize text-lg text-center text-gray-400">
                
                {brand_name}
              </p>
              <button className="text-sm flex items-center gap-1  uppercase text-teal-700 font-light mx-auto w-full"> Click <BsArrowRight/> </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default HomeCard;
