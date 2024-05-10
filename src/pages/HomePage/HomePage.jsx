import React from "react";
import SliderComponent from "../../components/layout/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

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

const HomePage = () => {
  return (
    <>
      <SliderComponent />
      <div className="mx-24 mr-24">
        <img
          className="m-auto mt-2 mb-2"
          src="https://file.hstatic.net/200000189007/file/nhat_dinh_phai_thu_edf631e5726041b4962a41f2faa9b320.jpg"
          alt=""
        />
        <div className="grid grid-cols-5 ">
          {fruits.map((fruit, index) => (
            <CardComponent key={index} props={fruit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
