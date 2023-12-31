import React from "react";
import Swal from "sweetalert2";

const Form = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const info = { name, brand, price, type, description, rating, photo };
    console.log(info);

    fetch("https://assignmant-10-server.vercel.app/laptop", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfull!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-full h-screen">
      <div className="">
        <div className=" mt-28 md:mt-36 bg-gradient-to-t to-teal-950 rounded-lg shadow-xl from-gray-800 w-full md:w-9/12 mx-auto p-8 md:p-20 ">
          <div className="text-center">
            <h1 className="font-philospar drop-shadow-lg  font-bold text-white text-4xl mb-3">
              Add Anyother Item
            </h1>
          </div>

          <form onSubmit={handleForm}>
            <div className="md:flex gap-7 mt-10 ">
              <div className="md:w-1/2">
                <label className="font-philospar text-white" htmlFor="">
                  Name
                  <input
                    className="w-full text-black outline-none  px-3 py-2 mt-2 rounded"
                    type="text"
                    name="name"
                    id=""
                  />
                </label>
              </div>
              <div className="md:w-1/2">
                <label className="font-philospar text-white" htmlFor="">
                  Brand Name
                  <input
                    className="w-full text-black mt-2 outline-none b-white px-3 py-2 rounded"
                    type="text"
                    name="brand"
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="md:flex gap-7 mt-3">
              <div className="md:w-1/2">
                <label className="font-philospar text-white" htmlFor="">
                  Price
                  <input
                    className="w-full text-black outline-none b-white px-3 py-2 mt-2 rounded"
                    type="text"
                    name="price"
                    id=""
                  />
                </label>
              </div>
              <div className="md:w-1/2">
                <label className="font-philospar text-white" htmlFor="">
                  Description
                  <input
                    className="w-full text-black mt-2 outline-none b-white px-3 py-2 rounded"
                    type="text"
                    name="description"
                    id=""
                  />
                </label>
              </div>
            </div>
            <div className="md:flex gap-7 mt-3 ">
              <div className="md:w-1/2 ">
                <label className="font-philospar text-white" htmlFor="">
                  Rating
                  <input
                    className="w-full text-black outline-none b-white px-3 py-2 mt-2 rounded"
                    type="text"
                    name="rating"
                    id=""
                  />
                </label>
              </div>
              <div className="md:w-1/2">
                <label className="font-philospar text-white" htmlFor="">
                  Type
                  <select
                    className="w-full text-black outline-none b-white px-3 py-2 mt-2 rounded"
                    name="type"
                    id=""
                  >
                    <option value="select">Select</option>
                    <option value="laptop">Laptop</option>
                    <option value="watch">Watch</option>
                    <option value="mouse">Mouse</option>
                    <option value="eyarphone">Eyarphone</option>
                    <option value="mobile">Mobile</option>
                    <option value="keyaboard">keyaboard</option>
                    <option value="bluetooth">Bluetooth</option>
                    <option value="monitor">Monitor</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="w-full mt-2">
              <label className="font-philospar text-white" htmlFor="">
                Photo
                <input
                  className="w-full text-black mt-2 outline-none b-white px-3 py-2 rounded"
                  type="url"
                  name="photo"
                  id=""
                />
              </label>
            </div>
            <button className="w-full text-black bg-sky-500 font-philospar mt-5 py-2 text-lg rounded">
              Add Card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
