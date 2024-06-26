import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const NumOfProduct = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const nsxid = localStorage.getItem("nsxid");
    axios
      .get(`${process.env.REACT_APP_BE}/product/getAllProduct?nsxid=${nsxid}`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="m-3 p-3 bg-blue-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng sản phẩm</h6>
        <p className="text-white p-2 text-2xl">
          {products ? products.length : ""}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faProductHunt} className=" h-28" />
      </div>
    </div>
  );
};

export default NumOfProduct;
