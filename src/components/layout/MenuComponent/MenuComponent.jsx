import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE}/category/getAll`)
      .then((response) => {
        setTypes(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          {types.map((type) => (
            <Link
              key={type.id}
              to={`/product?type=${type._id}`}
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
            >
              {type.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MenuComponent;
