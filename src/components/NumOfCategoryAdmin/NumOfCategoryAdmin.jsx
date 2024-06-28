import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { getAllCategories } from "../../services/CategoryService";

const NumOfCategoryAdmin = () => {
  const [categories, setCategories] = useState([]);

  useState(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="m-3 p-3 bg-orange-500 h-36 rounded-md grid grid-cols-3 shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng thể loại </h6>
        <p className="text-white p-2 text-2xl">{categories.length}</p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faCoffee} className="h-28" />
      </div>
    </div>
  );
};

export default NumOfCategoryAdmin;
