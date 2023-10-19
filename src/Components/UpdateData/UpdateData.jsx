import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
  const update = useLoaderData();
  const { _id, name, brand, price, select, description, rating, photo } =
    update;

  const updateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const info = { name, brand, price, type, description, rating, photo };
    console.log(info);

    fetch(`http://localhost:3017/laptop/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
    <div className="w-full my-10">
      <div className="bg-gradient-to-r rounded-lg to-violet-800 from-black w-full md:w-9/12 mx-auto p-8 md:p-20 md:mt-20">
        <div className="text-center">
          <h1 className="font-philospar drop-shadow-lg text-white  font-bold text-4xl mb-3">
            Update Your Card info
          </h1>
        </div>

        <form onSubmit={updateHandler}>
          <div className="md:flex gap-7  mt-10 ">
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Name
                <input
                  className="w-full text-black outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="name"
                  id=""
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Brand Name
                <input
                  className="w-full text-black  mt-2 outline-none b-white px-3 py-2 rounded"
                  type="text"
                  name="brand"
                  id=""
                  defaultValue={brand}
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-7 mt-3">
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Price
                <input
                  className="w-full text-black  outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="price"
                  id=""
                  defaultValue={price}
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Description
                <input
                  className="w-full text-black  mt-2 outline-none b-white px-3 py-2 rounded"
                  type="text"
                  name="description"
                  id=""
                  defaultValue={description}
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-7 mt-3 ">
            <div className="md:w-1/2 ">
              <label className="font-philospar text-white" htmlFor="">
                Rating
                <input
                  className="w-full text-black  outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="rating"
                  id=""
                  defaultValue={rating}
                />
              </label>
            </div>
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Type
                <select
                  className="w-full text-black  outline-none b-white px-3 py-2 mt-2 rounded"
                  name="type"
                  defaultValue={type}
                  id=""
                >
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
                className="w-full text-black  mt-2 outline-none b-white px-3 py-2 rounded"
                type="url"
                name="photo"
                id=""
                defaultValue={photo}
              />
            </label>
          </div>
          <button type="submit" className="w-full bg-sky-500 font-philospar mt-5 py-2 text-lg rounded">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
