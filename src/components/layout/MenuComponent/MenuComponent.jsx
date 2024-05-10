import React from "react";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  const arrItem = ["xoai", "mancau", "Sầu riêng", "Hạt điều"];
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 duration-700 sm:mx-6"
          >
            home
          </Link>

          <Link
            to="/product"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            product
          </Link>
          {arrItem.map((item, index) => (
            <Link
              key={index}
              to={`/product?type=${item}`}
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/blog"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            blog
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MenuComponent;
