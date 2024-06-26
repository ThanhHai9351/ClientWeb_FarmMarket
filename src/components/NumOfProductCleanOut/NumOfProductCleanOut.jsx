import React, { useEffect, useState } from "react";
import { faSquareTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const NumOfProductCleanOut = () => {
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

  const numOfProductCleanOut = () => {
    let count = 0;
    products.forEach((product) => {
      if (product.quantity < 30) {
        count++;
      }
    });
    return count;
  };
  return (
    <div className="m-3 p-3 bg-green-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng sản phẩm gần hết</h6>
        <p className="text-white p-2 text-2xl">
          {products ? numOfProductCleanOut() : ""}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faSquareTumblr} className=" h-28" />
      </div>
    </div>
  );
};

export default NumOfProductCleanOut;
