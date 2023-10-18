
import React from 'react'

const Form = () => {
    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const select = form.select.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const info = {name, brand, price,select, description,rating,photo}
        console.log(info);

        fetch('http://localhost:3017/laptop',{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(info)
        })

    }
    return (
        <div className="w-full my-10">
      <div className="bg-gradient-to-t to-pink-400 from-rose-700 w-full md:w-9/12 mx-auto p-8 md:p-20 md:mt-20">
        <div className="text-center">
          <h1 className="font-philospar drop-shadow-lg  font-bold text-4xl mb-3">
            Add Anyother Item
          </h1>
          <p className=" font-yantraman font-light text-lg ">
            It is a long established fact that a reader will be distraceted by
            the readable <br /> content of a page when looking at its layout. The point{" "}
            
          </p>
        </div>

        <form onSubmit={handleForm}>
          <div className="md:flex gap-7  mt-10 ">
            <div className="md:w-1/2">
              <label className="font-philospar text-white" htmlFor="">
                Name
                <input
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
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
                  className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
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
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
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
                  className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
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
                  className="w-full outline-none b-white px-3 py-2 mt-2 rounded"
                  type="text"
                  name="rating"
                  id=""
                />
              </label>
            </div>
            <div className='md:w-1/2'>
            <label className="font-philospar text-white" htmlFor="">
                 Type
                 <select className="w-full outline-none b-white px-3 py-2 mt-2 rounded" name="select" id="">
                <option value="macbook">Macbook</option>
                <option value="samsung">Samsung</option>
                <option value="hp">Hp</option>
                <option value="asus">Asus</option>
                <option value="acer">Acer</option>
                <option value="lenovo">Lenovo</option>
              </select>
              </label>
              
            </div>
          </div>
          <div className="w-full mt-2">
            <label className="font-philospar text-white" htmlFor="">
              Photo
              <input
                className="w-full mt-2 outline-none b-white px-3 py-2 rounded"
                type="url"
                name="photo"
                id=""
              />
            </label>
          </div>
          <button className="w-full bg-sky-500 font-philospar mt-5 py-2 text-lg rounded">
            Add Card
          </button>
        </form>
      </div>
    </div>
    )
}

export default Form