/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import StartupModal from "../../../Components/startupModal";

const Search = () => {
  const data = useLoaderData().searchData;
  console.log(data);
  return (
    <div>
      <h1> {data.length} result found:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.length > 0 ? (
          data?.map((mobile) => (
            <div
              key={mobile._id}
              className=" bg-white p-4  rounded-lg shadow-md"
              onClick={() => document.getElementById(mobile._id).showModal()}
            >
              <h2 className="text-xl font-semibold mb-2">
                {mobile.name}
              </h2>
              <img src={mobile?.image} alt={mobile.name} className="h-32 w-32 object-cover" />
              <p className="text-gray-600 text-sm mb-2 font-bold">
                OS: {mobile.os}
              </p>
              <p className="text-gray-600 text-sm mb-2 font-bold">
                Processor: {mobile.processor}
              </p>
              <p className="text-gray-600 text-sm mb-2 font-bold">
                Memory: {mobile.memory}
              </p>
              <p className="text-green-600 text-lg font-bold ">
                Price: ${mobile.price}
              </p>

              <StartupModal startup={mobile} id={mobile._id} />
            </div>
          ))
        ) : (
          <div className="text-center mt-7">
            <h1 className="font-bold text-2xl ">Not matched with any data</h1>
            <h1>Search by full name of startup/industry/sub-industry</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
