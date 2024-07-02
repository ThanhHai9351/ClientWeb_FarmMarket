import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetail } from "../../../services/OrderService";
import { formattedDate, formattedPrice } from "../../../components/constants";
import { getAllUsers } from "../../../services/UserService";
import ItemCartDetail from "../../../components/ItemCartDetail/ItemCartDetail";

const OrderDetailAdmin = () => {
  const [order, setOrder] = useState(null);
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOrderDetail(id)
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [order]);

  const getNameUser = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === id) return users[i].name;
    }
    return null;
  };
  console.log(order);
  return (
    <>
      {order ? (
        <div>
          <div className="p-5">
            <h5 className="text-2xl font-semibold">
              Chi tiết đơn hàng #dsfssdsfdff
            </h5>
            <div className="mt-2">
              <span className="text-xl">Thời gian đặt hàng:</span>
              <span className="mx-3 text-xl font-semibold text-green-500">
                {formattedDate(order.paidAt)}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-xl">Tổng tiền:</span>
              <span className="mx-3 text-xl font-semibold text-red-700">
                {formattedPrice(order.totalPrice)}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-xl">Hình thức thanh toán:</span>
              <span className="mx-3 text-xl font-semibold text-blue-700">
                {order.paymentMethod}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-xl">Trạng thái đơn hàng:</span>
              {order.isDevired ? (
                <span className="mx-3 text-xl font-semibold text-green-700">
                  Đã giao
                </span>
              ) : (
                <span className="mx-3 text-xl font-semibold text-red-700">
                  Chưa giao
                </span>
              )}
            </div>
            <div className="mt-2">
              <span className="text-xl">Tên khách hàng:</span>
              <span className="mx-3 text-xl font-semibold">
                {getNameUser(order.userid)}
              </span>
            </div>
            <div className="mt-2">
              <div className="p-3 m-2 border border-gray-600">
                <h6 className="text-xl">Sản phẩm đã đặt:</h6>
                <hr className="mt-2" />
                <div className="mt-2 grid grid-cols-5 text-center">
                  <div className="col-span-1">#</div>
                  <div className="col-span-1 text-xl font-medium">
                    Tên sản phẩm
                  </div>
                  <div className="col-span-1 text-xl font-medium">Số lượng</div>
                  <div className="col-span-1 text-xl font-medium">Tiền</div>
                  <div className="col-span-1 text-xl font-medium">
                    Tổng tiền
                  </div>
                </div>
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
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OrderDetailAdmin;
