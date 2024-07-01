import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import { getAllOrder } from "../../services/OrderService";

const NumOfOrderAdmin = () => {
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
  return (
    <div className="m-3 p-3 bg-green-500 h-36 rounded-md grid grid-cols-3 shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng đơn hàng </h6>
        <p className="text-white p-2 text-2xl">
          {orders.length > 0 ? orders.length : 0}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faUncharted} className="h-28" />
      </div>
    </div>
  );
};

export default NumOfOrderAdmin;
