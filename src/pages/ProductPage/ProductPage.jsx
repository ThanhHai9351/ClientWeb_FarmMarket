import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Link, useLocation } from "react-router-dom";
const fruits = [
  {
    id: 1,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 2,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 3,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 4,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 5,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 6,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 7,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 8,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 9,
    name: "Xoài",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "xoai",
  },
  {
    id: 10,
    name: "mancau",
    price: 30000,
    image:
      "https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg",
    type: "mancau",
  },
];

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  var fruitsNew = fruits;
  if (type === "xoai") {
    fruitsNew = fruits.filter((fruits) => fruits.type === "xoai");
  } else if (type === "mancau") {
    fruitsNew = fruits.filter((fruits) => fruits.type === "mancau");
  }

  console.log(type);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 mx-28 mt-11">
        <Link
          to="/order"
          className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
        >
          Rau không hóa chất hữu cơ
        </Link>
        <Link
          to="/order"
          className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
        >
          Thịt bò
        </Link>
        <Link
          to="/order"
          className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
        >
          Thịt gà
        </Link>
        <Link
          to="/order"
          className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
        >
          Cà phê
        </Link>
        <Link
          to="/order"
          className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
        >
          Sầu riêng
        </Link>
      </div>
      <div className="col-span-3 m-2">
        <div>
          <h6 className="font-medium text-2xl m-5 mx-4 mb-32">
            Tất cả sản phẩm
          </h6>
        </div>
        <div className="grid grid-cols-5">
          {fruitsNew.map((fruit, index) => (
            <CardComponent key={index} props={fruit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
