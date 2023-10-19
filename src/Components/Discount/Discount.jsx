import React from "react";
import discount from "../../assets/discount/dell2.webp";
import discount2 from "../../assets/discount/acer3.png";
import discount3 from "../../assets/discount/mi5.png";
import discount4 from "../../assets/discount/mak1.png";
const Discount = () => {
  return (
    <div>
      <div className="w-9/12 my-10 mx-auto flex items-center justify-center gap-10">
        <div className="flex w-6/12 relative border">
          <div>
            {" "}
            <img src={discount} alt="" />
            <img src={discount2} alt="" />
          </div>
          <div>
            <img src={discount3} alt="" />
            <img src={discount4} alt="" />
          </div>
            <div className="text-white absolute border p-6 h-32 w-32 right-0 rounded-full top-2/3 bg-rose-500 "> <h1 className="text-xl font-philospar text-center " ><span className="text-5xl  ">50%</span> <span className="block">Discount</span></h1></div>
        </div>
        <div className="font-philospar">
            <h1 className="text-3xl first-letter:text-5xl   font-bold text-black uppercase">black <span className="text-rose-600">Friday</span></h1>
            <h1>special Discount Offer</h1>
            <p className="w-[500px]">Looking for the perfect laptop to enhance your productivity, gaming, or entertainment experience? Look no further! We're excited to offer you an exclusive limited-time discount on our top-rated laptops. Don't miss this opportunity to save big on cutting-edge technology.</p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
