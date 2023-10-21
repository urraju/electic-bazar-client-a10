import React from "react";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
const MyCard2 = ({ data, setDeleted, useData }) => {
  const { _id, name, brand, price, type, rating, photo } = data;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignmant-10-server.vercel.app/addlaptop/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((datadelete) => {
            console.log(datadelete);

            if (datadelete.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaing = useData.filter((del) => del._id !== data._id);
              setDeleted(remaing);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className=" relative backdrop-blur md:h-72 bg-white/5 flex flex-col md:flex-row border items-center gap-10 rounded-xl p-5">
        <div>
          <img className=" md:w-80" src={photo} alt="" />
        </div>
        <div>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">Name : </span>
            {name}
          </p>

          <p className="text-teal-600 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Brand :{" "}
            </span>
            {brand}
          </p>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">Type : </span>
            {type}
          </p>
          <p className="text-gray-300 capitalize">
            <span className="text-sky-500 text-lg font-philospar">
              Price :{" "}
            </span>
            ${price}
          </p>
          <p className="text-rose-500 capitalize flex items-center gap-2">
            <span className="text-sky-500 text-lg font-philospar">
              Rating :{" "}
            </span>
            {rating.length > 0 ? (
              <div className="rating text-sm rating-sm">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-red-500 "
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-red-500"
                  checked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-red-500"
                  checked
                />
              </div>
            ) : (
              "0"
            )}
          </p>
        </div>
        <div className="w-full flex items-end justify-end md:absolute md:bottom-3 md:right-4">
          <button
            onClick={() => handleDelete(_id)}
            className="bg-rose-600 rounded-full text-white inline-block px-4 py-1"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCard2;
