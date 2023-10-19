import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardBrand from "../CardBrand/CardBrand";
import Slider from "../Slider/Slider";

const BrandCard = () => {
    const data = useLoaderData();
    console.log(data);
    const {brand_name} = useParams();
    
    const filteredData = data?.filter((item) => item.brand === brand_name) || []
    console.log(filteredData);
    return (
     <div className="w-9/12 mx-auto">
     
       <div>
       <div>
        <Slider filter={filteredData}/>
      </div>
       <div  className="w-7/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
       {filteredData.length > 0 ? (
          filteredData?.map((item) => <CardBrand key={item._id} brandCard={item}/>
            
          )
        ) : (
          <p>No items found for brand {brand_name}</p>
        )}
       </div>
      </div>
     </div>
    );
    
};

export default BrandCard;
