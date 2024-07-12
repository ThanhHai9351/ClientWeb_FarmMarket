import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import $ from "jquery";

function Slider() {
  const [cont, setCont] = useState(0);
  const [xx, setXx] = useState(null);

  useEffect(() => {
    $(function () {
      $("#slider-2").hide();
      $("#sButton1").addClass("bg-purple-800");

      loopSlider();
    });
  }, [cont]);

  function loopSlider() {
    setXx(
      setInterval(() => {
        loopSlider();
      }, 8000)
    );
  }

  function reinitLoop(time) {
    clearInterval(xx);
    setTimeout(loopSlider, time);
  }

  function sliderButton1() {
    $("#slider-2").fadeOut(400);
    $("#slider-1").delay(400).fadeIn(400);
    $("#sButton2").removeClass("bg-purple-800");
    $("#sButton1").addClass("bg-purple-800");
    reinitLoop(4000);
    setCont(0);
  }

  function sliderButton2() {
    $("#slider-1").fadeOut(400);
    $("#slider-2").delay(400).fadeIn(400);
    $("#sButton1").removeClass("bg-purple-800");
    $("#sButton2").addClass("bg-purple-800");
    reinitLoop(4000);
    setCont(1);
  }
  return (
    <div className="mt-2">
      <div className="sliderAx h-auto">
        <div id="slider-1" className="container mx-auto">
          <div
            className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
            style={{
              backgroundImage: `url(${images.farmer})`,
            }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">
                Sầu riêng chất lương
              </p>
              <p className="text-3xl font-bold">An toàn vệ sinh thực phẩm</p>
              <p className="text-2xl mb-10 leading-none">Giá cả phải chăng</p>
              <Link
                to="/product"
                className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Xem ngay
              </Link>
            </div>
          </div>
        </div>

        <div id="slider-2" className="container mx-auto">
          <div
            className="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill"
            style={{
              backgroundImage: `url(${images.saurieng})`,
            }}
          >
            <p className="font-bold text-sm uppercase">Bonmera Farm</p>
            <p className="text-3xl font-bold">
              Sầu riêng thơm ngon chất lượng cao
            </p>
            <p className="text-2xl mb-10 leading-none">
              Huyền thoại cà phê và sầu riêng
            </p>
            <Link
              to="/product"
              className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-12 mx-auto pb-2 mt-2">
        <button
          id="sButton1"
          onClick={sliderButton1}
          className="bg-purple-400 rounded-full w-4 pb-2 "
        ></button>
        <button
          id="sButton2"
          onClick={sliderButton2}
          className="bg-purple-400 rounded-full w-4 p-2"
        ></button>
      </div>
    </div>
  );
}

export default Slider;
