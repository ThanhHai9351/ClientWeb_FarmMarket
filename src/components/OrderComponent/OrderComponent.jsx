import React from "react";
import { formattedDate, formattedPrice } from "../constants";
import { Link } from "react-router-dom";

const OrderComponent = (props) => {
  const order = props.item;
  return (
    <>
      <div className="grid grid-cols-7   border-b border-gray-700 p-3">
        <div className="col-span-2">
          <span>Mã đơn hàng: </span>
          <span className="mx-2 text-gray-700 font-semibold">#{order._id}</span>
        </div>
        <div className="col-span-2">
          <span>Ngày đặt: </span>
          <span className="mx-2 text-yellow-700 text-xl">
            {formattedDate(order.paidAt)}
          </span>
        </div>
        <div className="col-span-1">
          <span>Tổng: </span>
          <span className="text-red-700 text-xl">
            {formattedPrice(order.totalPrice)}
          </span>
        </div>
        <div className="col-span-1">
          <span>Trạng thái:</span>
          {order.isDelivered ? (
            <span className="font-semibold mx-2 text-green-700">
              Đã được giao
            </span>
          ) : (
            <span className="font-semibold mx-2 text-red-700">Chưa giao</span>
          )}
        </div>
        <div className="col-span-1">
          <Link
            to={`/user/myorder/detail/${order._id}`}
            className="mx-2 text-blue-600 font-medium hover:underline duration-300"
          >
            Xem thông tin chi tiết
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderComponent;
