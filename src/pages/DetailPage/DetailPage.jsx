import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CardComponent from "../../components/CardComponent/CardComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import { formattedPrice } from "../../components/constants";
import { getUserToken } from "../../services/UserService";

const DetailPage = () => {
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Chi tiết sản phẩm";
    var token = localStorage.getItem("ustoken");

    const getUser = () => {
      getUserToken(token)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/product/detail/${id}`
        );
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/product/getAll?limit=5`
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getProduct();
    getUser();
    fetchApi();
  }, []);

  const handleBuyProduct = () => {
    if (user === null) {
      alert("Bạn chưa đăng nhập!");
    } else {
      const data = {
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price,
        productid: product._id,
        userid: user._id,
      };
      axios
        .post(`${process.env.REACT_APP_BE}/shoppingcart/create`, data)
        .then((response) => {
          alert("Đã thêm vào giỏ hàng");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      {product ? (
        <div>
          <div className="grid grid-cols-10">
            <div className="col-span-1">
              <img
                className="w-24 m-5 border border-slate-900"
                src={product.image}
                alt=""
              />
            </div>
            <div className="col-span-5">
              <img
                className=" mr-32 border-slate-900"
                src={product.image}
                alt=""
              />
            </div>
            <div className="col-span-4  m-3">
              <h6 className="text-2xl font-semibold mt-3 mb-1">
                {product.name}
              </h6>
              <p className="opacity-60 mb-3">SDK : {product._id}</p>
              <hr />
              <p className="mt-3 mb-3 text-red-600 font-bold text-xl">
                {formattedPrice(product.price)}
              </p>
              <hr />
              <h6 className="mt-5 font-semibold">Mô tả</h6>
              <p className="mt-2 mb-2">{product.description}</p>
              <hr />
              <button
                onClick={handleBuyProduct}
                className="btn-buy border border-red-600 p-3 m-2 rounded-xl  text-red-600 font-medium"
              >
                <FontAwesomeIcon
                  className="icon mr-2 text-red-600"
                  icon={faCartShopping}
                />{" "}
                Add to cart
              </button>
            </div>
          </div>
          <hr />
          <div>
            <h3 className="text-center text-2xl font-medium mt-10 mb-5">
              SẢN PHẨM LIÊN QUAN
            </h3>
            <div className="grid grid-cols-5 ">
              {products.map((product, index) => (
                <CardComponent key={index} props={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailPage;
