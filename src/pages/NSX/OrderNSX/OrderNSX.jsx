import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllOrder } from "../../../services/OrderService";
import { formattedDate, formattedPrice } from "../../../components/constants";

const OrderNSX = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const nsxid = localStorage.getItem("nsxid");

  useEffect(() => {
    getAllOrder()
      .then((res) => {
        setOrders(res);
        setTotalPages(Math.ceil(res.length / itemsPerPage));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemsPerPage]);

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
  }, [orders, nsxid]);

  const isOfNSX = (productid) => {
    return products.some((product) => product._id === productid);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
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
    return productsNew.slice((page - 1) * itemsPerPage, page * itemsPerPage);
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
                      {getItemOrder().map((item, index) => (
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
      <div className="flex items-center justify-center p-3">
        <nav aria-label="Page navigation" className="bg-gray-400">
          <ul className="list-style-none flex">
            <li>
              <button
                onClick={() => handlePageChange(page - 1)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface 
                transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700
                 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white
                  dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500
                   dark:active:bg-neutral-700 dark:active:text-primary-500"
                disabled={page === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li key={index} className="flex items-center justify-center">
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`relative block rounded px-3 py-1.5 text-sm text-surface transition duration-300
    hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none
    active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 
    dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700
    dark:active:text-primary-500 ${page === index + 1 ? "bg-neutral-450" : ""}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(page + 1)}
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                disabled={page === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default OrderNSX;
