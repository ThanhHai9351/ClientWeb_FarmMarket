import React, { useEffect, useState } from "react";
import SliderComponent from "../../components/layout/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import axios from "axios";
import HeaderComponent from "../../components/layout/HeaderComponent/HeaderComponent";

const HomePage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BE}/product/getAll`);
      setFruits(res.data.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

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
          {fruits.map((fruit, index) => (
            <CardComponent key={index} props={fruit} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
