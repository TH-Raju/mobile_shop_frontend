/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Orders = () => {
  const [load, setLoad] = useState(false);
  const { data: allOrders, refetch } = useQuery({
    queryKey: ["categoriyy"],
    queryFn: async () => {
      setLoad(true);
      const res = await fetch(
        "https://mobile-shop-i004owzzq-th-raju.vercel.app/api/v1/order"
      );
      const data = await res.json();
      if (data) {
        setLoad(false);
      }
      return data?.data;
    },
  });
  console.log(allOrders);
  return (
    <div>
      {load && (
        <div className="text-center">
          <span className="loading loading-bars loading-lg "></span>
        </div>
      )}
      <h1> Orders</h1>
      {allOrders?.map((orders) => (
        <div key={orders?.id}></div>
      ))}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allOrders?.map((orders, i) => (
              <tr key={orders?.id}>
                <th>{i + 1}</th>
                <td>{orders?.name}</td>
                <td>{orders?.productName}</td>
                <td>{orders?.phone}</td>
                <td>{orders?.email}</td>
                <td>{orders?.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
