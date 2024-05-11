import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CardComponent from "../../components/CardComponent/CardComponent";
const fruits = [
  {
    id: 1,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 2,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 3,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 4,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 5,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 6,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 7,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 8,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 9,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 10,
    name: "mancau",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3" +
      "d93294ffabf301f4059409710_master.jpg",
    type: "mancau",
  },
];

const DetailPage = () => {
  const { id } = useParams();
  const fruit = fruits.find((fruit) => fruit.id === parseInt(id));
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(fruit.price);
  return (
    <>
      <div className="grid grid-cols-10">
        <div className="col-span-1">
          <img
            className="w-24 m-5 border border-slate-900"
            src={fruit.image}
            alt=""
          />
        </div>
        <div className="col-span-5">
          <img className=" mr-32 border-slate-900" src={fruit.image} alt="" />
        </div>
        <div className="col-span-4  m-3">
          <h6 className="text-2xl font-semibold mt-3 mb-1">{fruit.name}</h6>
          <p className="opacity-60 mb-3">SDK : {fruit.id}</p>
          <hr />
          <p className="mt-3 mb-3 text-red-600 font-bold text-xl">
            {formattedPrice}
          </p>
          <hr />
          <h6 className="mt-5 font-semibold">Mô tả</h6>
          <p className="mt-2 mb-2">CHẢ LỤA TƯƠI LÀM TỪ THỊT HEO TƯƠI</p>
          <p className="mb-3">
            {" "}
            <FontAwesomeIcon icon={faCheck} />
            Giò lụa không dùng hàn the mà lại chuẩn giòn dai, siêu ngon và hợp
            vệ sinh. Không chất bảo quản, đảm bảo luôn tươi mới khi đến tay
            khách hàng.
          </p>
          <hr />
          <button className="btn-buy border border-red-600 p-3 m-2 rounded-xl  text-red-600 font-medium">
            <FontAwesomeIcon
              className="icon mr-2 text-red-600"
              icon={faCartShopping}
            />{" "}
            Mua ngay
          </button>
        </div>
      </div>
      <hr />
      <div>
        <h3 className="text-center text-2xl font-medium mt-10 mb-5">
          SẢN PHẨM LIÊN QUAN
        </h3>
        <div className="grid grid-cols-5 ">
          {fruits.map((fruit, index) => (
            <CardComponent key={index} props={fruit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
