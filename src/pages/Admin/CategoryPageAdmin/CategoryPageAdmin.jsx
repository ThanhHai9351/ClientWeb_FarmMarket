import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { createCategory } from "../../../services/CategoryService";

const CategoryPageAdmin = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const getCategories = () => {
    axios
      .get(`${process.env.REACT_APP_BE}/category/getAll?page=${page - 1}`)
      .then((res) => {
        setCategories(res.data.data);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleDeleteCategory = (id) => {
    const confirmLogout = window.confirm(
      "Bạn chắc chắn muốn xóa sản phẩm này?"
    );
    if (confirmLogout) {
      axios
        .delete(`${process.env.REACT_APP_BE}/category/delete/${id}`)
        .then(() => {
          alert("Xóa sản phẩm thành công");
          getCategories();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSearchCategory = () => {
    const params = new URLSearchParams();
    if (search) params.append("filter", search);
    axios
      .get(`${process.env.REACT_APP_BE}/category/getAll?${params.toString()}`)
      .then((res) => {
        setCategories(res.data.data);
        setTotalPages(res.data.totalPage);
        setPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hanleCreateCategory = () => {
    createCategory(name)
      .then(() => {
        alert("Thêm thành công!");
        getCategories();
        setName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="p-3">
        <h6 className="text-2xl font-semibold p-3">Thể loại</h6>
      </div>
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          <div className="col-span-2">
            <div className="mx-4 w-96 rounded-lg p-2 bg-white mt-5">
              <input
                className="max-w-80 p-3 rounded-lg bg-slate-300"
                type="text"
                placeholder="Nhập tên sản phẩm"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                onClick={hanleCreateCategory}
                className="mx-2 mt-2 rounded-lg border border-blue-700 pt-2 pb-2 px-3 pr-3 text-blue-700 hover:text-white hover:bg-blue-700 duration-300"
              >
                Thêm thể loại
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-96 rounded-lg p-2 bg-white mt-5 border border-gray-500">
            <input
              className="w-80 p-1"
              type="text"
              placeholder="Tìm kiếm thể loại cần tìm"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={handleSearchCategory}
              className="mx-2 rounded-lg transition-all duration-500"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
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
                          Tên thể loại
                        </th>
                        <th scope="col" className="p-4">
                          <span className="text-gray-500">#</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {categories.map((category) => (
                        <tr
                          key={category._id}
                          className="hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <td className="p-4 w-4"></td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {category.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-center whitespace-nowrap hover:cursor-pointer">
                            <span
                              onClick={() =>
                                navigate(`/admin/category/edit/${category._id}`)
                              }
                              className="text-yellow-600 dark:text-yellow-500 hover:underline"
                            >
                              Sửa
                            </span>
                            <span
                              onClick={() => handleDeleteCategory(category._id)}
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

export default CategoryPageAdmin;
