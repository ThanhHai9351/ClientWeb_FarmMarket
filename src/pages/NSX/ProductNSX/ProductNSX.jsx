import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/CategoryService";
import { formattedPrice } from "../../../components/constants";
import { useNavigate } from "react-router-dom";

const ProductNSX = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const nsxid = localStorage.getItem("nsxid");
    axios
      .get(
        `${process.env.REACT_APP_BE}/product/getAll?nsxid=${nsxid}&page=${
          page - 1
        }`
      )
      .then((res) => {
        setProducts(res.data.data);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getNameCategory = (categoryid) => {
    if (categories) {
      const category = categories.find(
        (category) => category._id === categoryid
      );
      return category?.name;
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteProduct = (id) => {
    const confirmLogout = window.confirm(
      "Bạn chắc chắn muốn xóa sản phẩm này?"
    );
    if (confirmLogout) {
      axios
        .delete(`${process.env.REACT_APP_BE}/product/delete/${id}`)
        .then(() => {
          alert("Xóa sản phẩm thành công");
          navigate("/shop/product");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="p-3">
        <h6 className="text-2xl font-semibold p-3">Sản phẩm của bạn</h6>
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
                          Thể loại
                        </th>
                        <th scope="col" className="p-4">
                          <span className="text-gray-500">#</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {products.map((product) => (
                        <tr
                          key={product._id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="p-4 w-4"></td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                            {formattedPrice(product.price)}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {product.quantity}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {getNameCategory(product.categoryid)}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap hover:cursor-pointer">
                            <span
                              onClick={() =>
                                navigate(`/shop/product/edit/${product._id}`)
                              }
                              className="text-yellow-600 dark:text-yellow-500 hover:underline"
                            >
                              Sửa
                            </span>
                            <span
                              onClick={() => handleDeleteProduct(product._id)}
                              className="text-red-600 dark:text-red-500 hover:underline mx-3 hover:cursor-pointer"
                            >
                              Xóa
                            </span>
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

export default ProductNSX;
