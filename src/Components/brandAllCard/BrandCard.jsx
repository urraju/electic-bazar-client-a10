import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardBrand from "../CardBrand/CardBrand";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

const BrandCard = () => {
  const data = useLoaderData();
  console.log(data);
  const { brand_name } = useParams();

  const filteredData = data?.filter((item) => item.brand === brand_name) || [];
  console.log(filteredData);
  return (
    <div>
      <div className="w-9/12 mx-auto">
        <div>
          <div>
            <Slider filter={filteredData} />
          </div>
          <div className=" my-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredData.length > 0 ? (
              filteredData?.map((item) => (
                <CardBrand key={item._id} brandCard={item} />
              ))
            ) : (
              <p>No items found for brand {brand_name}</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandCard;
