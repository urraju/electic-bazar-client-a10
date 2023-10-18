import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardBrand from "../CardBrand/CardBrand";

const BrandCard = () => {
    const data = useLoaderData();
    console.log(data);
    const {name} = useParams();
    
    const filteredData = data?.filter((item) => item.name === name) || []
    console.log(filteredData);
    return (
     <div className="w-9/12 mx-auto">
       <div className="w-7/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredData.length > 0 ? (
          filteredData?.map((item) => <CardBrand key={item._id} brandCard={item}/>
            
          )
        ) : (
          <p>No items found for brand {name}</p>
        )}
      </div>
     </div>
    );
    
};

export default BrandCard;
