/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const AddMobile = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/api/v1/mobile/create";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          reset();
          alert("Successfully Added");
          navigate("/");
        } else {
          alert("Something Wrong!");
        }
      });
  };

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let newDate = day + "/" + month + "/" + year;
  //   console.log(newDate);
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center text-3xl font-bold mb-5">Add New Mobile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Mobile Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Mobile Name"
              {...register("name", {
                required: "name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Processor Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Processor Name"
              {...register("processor", {
                required: "processor is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Memory <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Memory Storage"
              {...register("memory", {
                required: "memory is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Operating System <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter OS Name"
              {...register("os", {
                required: "os is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Image Link <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Image Link"
              {...register("image", {
                required: "image is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className=" text-xl font-bold">
                Price <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              {...register("price", {
                required: "price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <input type="submit" className="btn btn-success my-4 px-10" />
      </form>
    </div>
  );
};

export default AddMobile;
