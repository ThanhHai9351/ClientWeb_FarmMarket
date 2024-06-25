import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllOrder } from "../../../services/OrderService";
import { formattedDate, formattedPrice } from "../../../components/constants";

const OrderNSX = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const nsxid = localStorage.getItem("nsxid");

  useEffect(() => {
    getAllOrder()
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      axios
        .get(`${process.env.REACT_APP_BE}/product/getAll?nsxid=${nsxid}`)
        .then((res) => {
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [orders]);

  const isOfNSX = (productid) => {
    return products.some((product) => product._id === productid);
  };

  const getItemOrder = () => {
    let productsNew = [];
    orders.forEach((order) => {
      order.orderItems.forEach((orderItem) => {
        if (isOfNSX(orderItem.productid)) {
          productsNew.push({
            name: orderItem.name,
            price: orderItem.price,
            quantity: orderItem.quantity,
            paidAt: order.paidAt,
            id: order._id,
          });
        }
      });
    });
    return productsNew;
  };

  return (
    <>
      <div className="p-3">
        <h6 className="text-2xl font-semibold p-3">Đơn hàng của bạn</h6>
      </div>
      <div className="p-3">
        <div className=" mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="p-4"></th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Mã đơn hàng
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Tên sản phẩm
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Giá sản phẩm
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Số lượng
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Ngày đặt hàng
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {getItemOrder() &&
                        getItemOrder().map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <td className="p-4 w-4"></td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              # {item.id}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                              {item.name}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {formattedPrice(item.price)}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {item.quantity}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {formattedDate(item.paidAt)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderNSX;
