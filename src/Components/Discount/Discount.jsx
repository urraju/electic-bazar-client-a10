import React from "react";
import discount from "../../assets/discount/mouse.png";
import discount2 from "../../assets/discount/wacth.png";
import discount3 from "../../assets/discount/eyarphone.png";
import discount4 from "../../assets/discount/mi5.png";
const Discount = () => {
  return (
    <div className="lg:w-9/12 mt-10 mx-auto mb-20 p-10">
      <div className="bg-rose-500 h-16 w-[2px] py-2 mx-auto"></div>
      <div className="text-center mb-14">
        <h1 className="md:text-4xl text-3xl font-philospar font-bold">
          Black <span className="text-rose-500 ">Friday</span> Our <br />{" "}
          Service
        </h1>
        <p className="mt-4 mx-auto">
          This service may be used either at noon or in the evening of Good
          Friday. It is preferable that there are
        </p>
      </div>
      <div className=" flex flex-col md:flex-row items-center  gap-10">
        <div className="flex relative ">
          <div>
            {" "}
            <img src={discount} alt="" />
            <img src={discount2} alt="" />
          </div>
          <div>
            <img src={discount3} alt="" />
            <img src={discount4} alt="" />
          </div>
          <div className="text-white absolute border p-6 h-32 w-32 right-0 rounded-full top-2/3 bg-rose-500 ">
            {" "}
            <h1 className="text-xl font-philospar text-center">
              <span className="text-5xl ">50%</span>{" "}
              <span className="block">Discount</span>
            </h1>
          </div>
        </div>
        <div className="font-philospar">
          <h1 className="text-3xl first-letter:text-5xl border-b inline-block border-rose-400 py-1  font-bold text-black uppercase">
            black <span className="text-rose-600 ">Friday</span>
          </h1>

          <h1 className="text-2xl font-bold capitalize mb-3">
            special Discount Offer
          </h1>
          <p className="md:w-[500px] text-sm">
            Looking for the perfect laptop,eyarphon,mouse,keyabord,monitor to
            enhance your productivity, gaming, or entertainment experience? Look
            no further! We're excited to offer you an exclusive limited-time
            discount on our top-rated laptops. Don't miss this opportunity to
            save big on cutting-edge technology.
          </p>
          <button className="bg-rose-500 rounded px-4 py-1 text-white mt-3">
            Get Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
