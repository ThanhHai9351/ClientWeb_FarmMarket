import React, { useEffect, useState } from "react";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllOrder } from "../../services/OrderService";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { formattedPrice } from "../constants";

const RevenueAdmin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrder()
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRevenue = () => {
    let sum = 0;
    orders.forEach((order) => {
      sum += order.totalPrice;
    });
    return sum;
  };
  console.log(orders);
  return (
    <div className="m-3 p-3 bg-yellow-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Doanh thu bán được</h6>
        <p className="text-white p-2 text-2xl">
          {orders.length > 0 ? formattedPrice(getRevenue()) : 0}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faBitcoin} className=" h-28" />
      </div>
    </div>
  );
};

export default RevenueAdmin;
