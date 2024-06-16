import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formattedDate, formattedPrice } from "../../components/constants";
import CardShoppingCartComponent from "../../components/CardShoppingCartComponent/CardShoppingCartComponent";
import ItemCartDetail from "../../components/ItemCartDetail/ItemCartDetail";

const DetailOrderPage = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getOrder = () => {
      axios
        .get(`${process.env.REACT_APP_BE}/order/detail/${id}`)
        .then((res) => {
          setOrder(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrder();
  }, []);
  return (
    <>
      {order === null ? (
        ""
      ) : (
        <div className="p-6">
          <div>
            <span className="text-xl">Chi tiết mã đơn hàng:</span>
            <span className="mx-2 text-gray-700 font-semibold text-xl">
              #{order._id}
            </span>
          </div>
          <div className="pt-2">
            <span className="text-xl">Tổng tiền:</span>
            <span className="mx-2 text-red-700 font-semibold text-xl">
              {formattedPrice(order.totalPrice)}
            </span>
          </div>
          <div className="pt-2">
            <span className="text-xl">Trạng thái:</span>
            {order.isDelivered ? (
              <span className="mx-2 text-green-700 text-xl font-semibold">
                Đã giao
              </span>
            ) : (
              <span className="mx-2 text-red-700 text-xl font-semibold">
                Chưa giao
              </span>
            )}
          </div>
          <div className="pt-2">
            <span className="text-xl">Ngày đặt:</span>
            <span className="mx-2 text-yellow-700  font-semibold text-xl">
              {formattedDate(order.paidAt)}
            </span>
          </div>
          <div className="p-3 m-2 border border-gray-600">
            <h6 className="text-xl">Chi tiết sản phẩm:</h6>
            <hr className="mt-2" />
            {order.orderItems.map((item) => (
              <ItemCartDetail
                key={item._id}
                item={item}
                product={item.productid}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailOrderPage;
