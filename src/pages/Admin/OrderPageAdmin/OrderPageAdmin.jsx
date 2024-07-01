import axios from "axios";
import React, { useEffect, useState } from "react";
import { formattedDate, formattedPrice } from "../../../components/constants";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getAllUsers } from "../../../services/UserService";

const OrderPageAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE}/order/getAll?page=${page - 1}`)
      .then((res) => {
        setOrders(res.data.data);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    axios
      .get(`${process.env.REACT_APP_BE}/order/getAll`)
      .then((res) => {
        setOrders(res.data.data);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orders]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteOrder = (id) => {
    const confirmLogout = window.confirm(
      "Bạn chắc chắn muốn xóa đơn hàng này?"
    );
    if (confirmLogout) {
      axios
        .delete(`${process.env.REACT_APP_BE}/order/delete/${id}`)
        .then(() => {
          alert("Xóa đơn hàng thành công");
          getOrders();
        })
        .catch((err) => {
          console.log(err);
          alert("Xóa đơn hàng thất bại");
        });
    }
  };

  const handleSearchOrder = () => {
    const params = new URLSearchParams();
    if (search) params.append("filter", search);
    axios
      .get(`${process.env.REACT_APP_BE}/order/getAll?${params.toString()}`)
      .then((res) => {
        setOrders(res.data.data);
        setTotalPages(res.data.totalPage);
        setPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNameUser = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === id) return users[i].name;
    }
    return null;
  };

  return (
    <>
      <div className="p-3">
        <h6 className="text-2xl font-semibold p-3">Đơn hàng</h6>
      </div>
      <div className="flex justify-end mr-3">
        <div className="w-96 rounded-lg p-2 bg-white mt-5 border border-gray-500">
          <input
            className="w-80 p-1"
            type="text"
            placeholder="Tìm kiếm đơn hàng"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearchOrder}
            className="mx-2 rounded-lg transition-all duration-500"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="mx-auto">
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
                          Người đặt
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Tổng tiền
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Thời gian đặt
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Trạng thái đơn hàng
                        </th>
                        <th scope="col" className="p-4">
                          <span className="text-gray-500">#</span>
                        </th>
                      </tr>
                    </thead>
                    {
                      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        {orders.map((order) => (
                          <tr
                            key={order._id}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <td className="p-4 w-4"></td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              # {order._id}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {getNameUser(order.userid)}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                              {formattedPrice(order.totalPrice)}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {formattedDate(order.paidAt)}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {order.isDelivered ? (
                                <span className="text-green-500">Đã giao</span>
                              ) : (
                                <span className="text-red-500">Chưa giao</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap hover:cursor-pointer">
                              <span
                                onClick={() =>
                                  navigate(`/admin/order/detail/${order._id}`)
                                }
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Xem chi tiết
                              </span>
                              <span
                                onClick={() => handleDeleteOrder(order._id)}
                                className="text-red-600 mx-3 dark:text-red-500 hover:underline hover:cursor-pointer"
                              >
                                Xóa
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </table>
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
                  className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  disabled={page === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }).map((_, index) => (
                <li key={index} className="flex items-center justify-center">
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
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
      </div>
    </>
  );
};

export default OrderPageAdmin;
