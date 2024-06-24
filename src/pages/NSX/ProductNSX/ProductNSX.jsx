import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/CategoryService";
import { formattedPrice } from "../../../components/constants";

const ProductNSX = () => {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const nsxid = localStorage.getItem("nsxid");
    axios
      .get(`${process.env.REACT_APP_BE}/product/getAll?nsxid=${nsxid}`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  const getNameCategory = (categoryid) => {
    if (categories) {
      const category = categories.find(
        (category) => category._id === categoryid
      );
      return category.name;
    }
  };

  return (
    <>
      <div className="p-3">
        <h6 className="text-2xl font-semibold p-3">Sản phẩm của bạn</h6>
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
                          Tên sản phấm
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
                      {products &&
                        products.map((product) => (
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
                            <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap">
                              <a
                                href="#"
                                className="text-yellow-600 dark:text-yellow-500 hover:underline"
                              >
                                Sửa
                              </a>
                              <a
                                href="#"
                                className="text-red-600 dark:text-red-500 hover:underline mx-3"
                              >
                                Xóa
                              </a>
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

export default ProductNSX;
