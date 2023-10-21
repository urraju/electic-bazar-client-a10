import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
const Samble = () => {
  const [samble, setSamble] = useState([]);
  const [show, setShow] = useState(8);
  useEffect(() => {
    fetch("https://assignmant-10-server.vercel.app/laptop")
      .then((res) => res.json())
      .then((data) => setSamble(data));
  }, []);

  return (
    <div className="mb-20">
      <div className="text-center p-5 mb-14 md:p-1">
        <div className="bg-rose-500 h-16 w-[2px] py-2 mx-auto"></div>
        <h1 className="font-yantraman text-3xl md:text-4xl first-letter:text-5xl first-letter:text-rose-500 font-bold mb-4 text-gray-500">
          See This Our Top Product
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi inventore <br /> dicta. Ab, voluptates minus!
        </p>
      </div>
      <div className=" mb-5 md:mb-20 relative w-9/12 mx-auto grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {samble.slice(0, show).map((data) => (
          <div key={data._id}>
            <div className="h-80 p-3 shadow-xl bg-gradient-to-tl from-gray-300 rounded-xl  flex flex-col place-content-end  ">
              <img className="w-56 mx-auto " src={data.photo} alt="" />
              <div className=" font-philospar mt-6">
                <p className="capitalize inline-block  bg-gradient-to-l text-gray-500 to-gray- rounded-full text-center bg-gray-200 mr-3 mb-3 px-4">
                  <span className="text-sky-300 font-bold">Name : </span>
                  {data.name}
                </p>
                <p className="capitalize inline-block bg-gradient-to-r  from-gray-50  rounded-full text-center bg-gray-200 text-gray-500 px-4">
                  <span className="text-teal-300 font-bold">Brand : </span>
                  {data.brand}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* button part  */}
      <div className={samble.length >= 8 ? "block" : "hidden"}>
        <div className={show === samble.length && "hidden"}>
          <button
            onClick={() => setShow(samble.length)}
            className="bg flex text-lg text-sky-500 items-center gap-2 rounded mx-auto px-5 py-2"
          >
            See More
            <BsArrowRight className="font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Samble;
