/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const { data: allMobiles, refetch } = useQuery({
    queryKey: ["mobiles"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/v1/mobile");
      const data = await res.json();

      return data?.data;
    },
  });

  console.log(allMobiles);
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allMobiles?.map((mobiles) => (
          <SwiperSlide key={mobiles?._id}>
            <div className="flex justify-around mb-10 bg-green-600 py-3">
              <img src={mobiles?.image} className="h-28" alt="" />
              <div>
                <h1 className="font-bold text-2xl">{mobiles?.name}</h1>
                <h1 className="font-bold">Price: ${mobiles?.price}</h1>
                <h1 className="font-bold">Memory: {mobiles?.memory}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
