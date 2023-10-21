import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import Footer from "../Footer/Footer";
import Discount from "../Discount/Discount";
import Samble from "../SambleProduct/Samble";

const Home = () => {
  const homeCardData = useLoaderData();
  return (
    <div>
      <div className="">
        <Banner />
      </div>
      <div className="w-9/12 mx-auto mt-20 ">
        <div className=" font-philospar text-center w-full rounded-e-xl  -top-36">
          <div className="bg-rose-500 h-16 w-[2px] py-2 mx-auto"></div>
          <div className="">
            <h1 className="text-5xl mb-5 font-bold">Choose You Any Brand</h1>
            <p className="text-gray-500   ">
              Our user-friendly official site and App lets you search for a
              laptop in your price range. You can also check <br /> brand-wise
              laptops such as samsung Apple, Asus, Acer, HP, Lenovo, Gigabyte,
              Doel & Avita. Laptops.
            </p>
          </div>
        </div>
        <div className=" mt-14  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-3">
          {homeCardData?.map((data) => (
            <HomeCard key={data.id} cardData={data} />
          ))}
        </div>
      </div>
      <Discount />
      <Samble />
      <Footer />
    </div>
  );
};

export default Home;
