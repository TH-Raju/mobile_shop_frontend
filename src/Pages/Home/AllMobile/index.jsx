/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StartupModal from "../../../Components/startupModal";
import Banner from "../../../Components/Banner";

const AllMobile = () => {
  let [filterData, setFilterData] = useState([]);
  const [load, setLoad] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const { data: allMobile, refetch } = useQuery({
    queryKey: ["categoriyy"],
    queryFn: async () => {
      setLoad(true);
      const res = await fetch(
        "https://mobile-shop-i004owzzq-th-raju.vercel.app/api/v1/mobile"
      );
      const data = await res.json();
      if (data) {
        setLoad(false);
      }
      return data?.data;
    },
  });

  console.log(allMobile);

  const handleOnchange = (e) => {
    const industry = e.target.value;
    // console.log(productName);

    const filterproductName = allMobile?.filter(
      (item) => item?.IndustryVertical === industry
    );

    setFilterData(filterproductName);
    // if (filterproductName) {
    //   console.log(filterproductName);
    // }
  };

  const clearFilter = () => {
    filterData = [];
    setFilterData(filterData);
    // console.log(filterData);
  };

  const uniqueProductName = [
    ...new Set(allMobile?.map((order) => order?.name)),
  ];
  //   console.log(filterData);

  const pagi = () => {
    if (end < allMobile?.length) {
      setStart(start + 20);
      setEnd(end + 20);
      refetch();
    } else {
      setStart(0);
      setEnd(20);
    }
  };

  const pagiBack = () => {
    if (start > 20) {
      setStart(start - 20);
      setEnd(end - 20);
      refetch();
    } else {
      setStart(0);
      setEnd(20);
    }
  };

  return (
    <div className="mb-10">
      <marquee>
        This Site is Not Properly Completed. Working is going on...{" "}
      </marquee>
      <div className="my-4">
        <span className="font-bold ml-4">Filter Mobile :</span>
        <select
          className="select select-primary ml-4 text-black"
          onChange={handleOnchange}
        >
          <option disabled selected>
            Select
          </option>

          {uniqueProductName.map((name, i) => (
            <option key={i} value={name} className="text-black">
              {name}
            </option>
          ))}
        </select>

        {filterData.length > 0 && (
          <button className="btn btn-primary  mx-3" onClick={clearFilter}>
            Reset
          </button>
        )}
      </div>
      <div className="flex justify-end gap-4 mb-2 mr-3 items-center">
        {start > 1 && (
          <button className="btn btn-sm btn-primary" onClick={() => pagiBack()}>
            {"<"}
          </button>
        )}
        <p>
          {start} - {end < allMobile?.length ? end : allMobile?.length} (
          {allMobile?.length})
        </p>
        <button className="btn btn-sm btn-primary" onClick={() => pagi()}>
          {">"}
        </button>
      </div>

      <div>
        <Banner />
      </div>
      {load && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filterData.length > 0
          ? filterData?.slice(start, end).map((mobile) => (
              <div
                key={mobile._id}
                className=" bg-white p-4  rounded-lg shadow-md"
                onClick={() => document.getElementById(mobile._id).showModal()}
              >
                <h2 className="text-xl font-semibold mb-2">{mobile.name}</h2>
                <img
                  src={mobile?.image}
                  alt={mobile.name}
                  className="h-32 w-32 object-cover"
                />
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
          : allMobile?.slice(start, end).map((mobile) => (
              <div
                key={mobile._id}
                className=" bg-white p-4  rounded-lg shadow-md"
                onClick={() => document.getElementById(mobile._id).showModal()}
              >
                <h2 className="text-xl font-semibold mb-2">{mobile.name}</h2>
                <img
                  src={mobile?.image}
                  alt={mobile.name}
                  className="h-32 w-32 object-cover"
                />
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
            ))}
      </div>
    </div>
  );
};

export default AllMobile;
