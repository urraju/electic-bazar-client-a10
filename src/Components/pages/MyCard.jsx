import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCard2 from "../MyCard/MyCard2";
import Footer from "../Footer/Footer";

const MyCard = () => {
  const useData = useLoaderData();
  const [deleted, setDeleted] = useState(useData);

  console.log(useData[0].name);
  console.log(useData);
  return (
    <div className="h-sreen w-full  bg-black bg-gradient-to-t  from-violet-800">
      <div className=" md:mt-36">
        <>
          {" "}
          className="text-white text-center font-philospar text-4xl
          first-letter:text-5xl first-letter:text-sky-500 md:block py-6"
        </>
      </div>

      <div className="w-9/12 mx-auto mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {deleted.map((item) => (
            <MyCard2
              key={item._id}
              data={item}
              setDeleted={setDeleted}
              useData={deleted}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCard;
