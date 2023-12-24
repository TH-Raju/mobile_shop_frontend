/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const StartupModal = ({ startup, id }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/api/v1/order/add";
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
          document.getElementById(id).close();
          alert("Thanks! We contact you soon....");
          navigate("/");
        } else {
          alert("Something Wrong!");
        }
      });
  };
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1">
              <h1 className="font-bold text-2xl mb-6">{startup?.name}</h1>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className=" text-xl font-bold">
                    Your Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: "name is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs hidden">
                <label className="label">
                  {" "}
                  <span className=" text-xl font-bold">
                    Phone Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={startup?.name}
                  placeholder="Enter Your Name"
                  {...register("productName", {
                    required: "productName is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className=" text-xl font-bold">
                    Phone Number<span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  {...register("phone", {
                    required: "phone is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className=" text-xl font-bold">
                    Email <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "email is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className=" text-xl font-bold">
                    Address <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address.."
                  {...register("address", {
                    required: "address is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-block mt-4 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-900 duration-150"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default StartupModal;
