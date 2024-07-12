import React, { useEffect, useState } from "react";
import SliderComponent from "../../components/layout/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import HeaderComponent from "../../components/layout/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/layout/FooterComponent/FooterComponent";
import { getAllProducts } from "../../services/ProductService";
import AboutMeComponent from "../../components/layout/AboutMeComponent/AboutMeComponent";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Trang chủ";

    const getProducts = () => {
      getAllProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, []);

  return (
    <>
      <HeaderComponent />
      <SliderComponent />
      <div className="mx-24 mr-24">
        <img
          className="m-auto mt-2 mb-2"
          src="https://file.hstatic.net/200000189007/file/nhat_dinh_phai_thu_edf631e5726041b4962a41f2faa9b320.jpg"
          alt=""
        />
        <div className="grid grid-cols-5 ">
          {products &&
            products.map((product) => (
              <CardComponent key={product._id} props={product} />
            ))}
        </div>
      </div>
      <AboutMeComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
