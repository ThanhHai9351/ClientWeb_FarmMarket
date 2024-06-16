import React, { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  useEffect(() => {
    document.title = "Sản phẩm";

    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/category/getAll`
        );
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams();
        if (search) params.append("filter", search);
        if (type) params.append("categoryid", type);
        params.append("page", page - 1);
        params.append("sort", sort);

        const res = await axios.get(
          `${process.env.REACT_APP_BE}/product/getAll?${params.toString()}`
        );
        setProducts(res.data.data);
        setTotalPages(res.data.totalPage);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducts();
  }, [type, search, page, sort]);

  useEffect(() => {
    if (type && categories.length > 0) {
      const matchedCategory = categories.find(
        (category) => category._id === type
      );
      setCategory(matchedCategory);
    } else {
      setCategory(null);
    }
  }, [type, categories]);

  useEffect(() => {
    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm("");
    }
  }, [search]);

  const handleIncreasePrice = () => {
    setSort("asc");
  };

  const handleDecreasePrice = () => {
    setSort("desc");
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-1 mx-28 mt-11">
          {categories.length > 0 &&
            categories.map((category) => (
              <Link
                key={category._id}
                to={`/product?type=${category._id}`}
                className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
              >
                {category.name}
              </Link>
            ))}
        </div>
        <div className="col-span-3 m-2">
          <div className="grid grid-cols-5">
            <div className="col-span-4">
              <h6 className="font-medium text-2xl m-5 mx-4 mb-8">
                {category ? <p>{category.name}</p> : <p>Tất cả sản phẩm</p>}
              </h6>
            </div>
            <div className="col-span-1">
              <div className="relative mt-3" data-twe-dropdown-ref>
                <button
                  className="flex items-center rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-gray-500 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  type="button"
                  id="dropdownMenuButton1"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Tồn kho
                  <span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
                    {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                  </span>
                </button>
                {isDropdownOpen && (
                  <ul
                    className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-surface-dark"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button
                        onClick={handleIncreasePrice}
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 
                        text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                      >
                        Giá tăng dần
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleDecreasePrice}
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                        href="#"
                      >
                        Giá giảm dần
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5">
            {products.map((product) => (
              <CardComponent key={product._id} props={product} />
            ))}
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
      </div>
    </div>
  );
};

export default ProductPage;
