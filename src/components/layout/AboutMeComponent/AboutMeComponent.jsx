import React from "react";
import { images } from "../../constants";

const AboutMeComponent = () => {
  return (
    <div className="m-3 p-3 bg-gray-200">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <p className="text-3xl">Tìm kiếm</p>
          <p className="text-3xl font-semibold">Nhiều sản phẩm nông sản</p>
        </div>
        <div className="col-span-1">
          <p>
            {" "}
            Chào mừng bạn đến với{" "}
            <span className="font-bold">BONMERA FARM</span> - nơi bạn có thể
            khám phá và mua sắm các sản phẩm nông sản tươi ngon và chất lượng
            cao từ các nông trại uy tín. Chúng tôi tự hào là cầu nối giữa người
            nông dân và người tiêu dùng, mang đến cho bạn những sản phẩm sạch,
            an toàn và tốt cho sức khỏe.
          </p>
          <button className="mt-2 border border-red-700 pt-2 pb-2 px-3  pr-3 rounded-md text-red-700 hover:bg-red-700 hover:text-white duration-300">
            Mua ngay
          </button>
        </div>
      </div>
      <hr className="mt-2 bg-red-500" />
      <div className="grid grid-cols-5 mt-3">
        <div className="col-span-3">
          <img
            alt=""
            src={images.company}
            className="rounded-lg shadow-lg shadow-gray-700"
          />
        </div>
        <div className="col-span-2">
          <div className="mx-3">
            <p className="text-3xl mb-2 font-medium text-yellow-800">
              Ở đây có
            </p>
            <div className="mx-2">
              <li className="text-xl">Sầu riêng ngon</li>
              <li className="text-xl">Cà phê ngon</li>
              <li className="text-xl">Mọi thức đều ngon ...</li>
            </div>
          </div>
          <div className="mt-2 mx-3">
            <p className="text-3xl mb-2 font-medium text-green-800">
              Sản Phẩm Đa Dạng
            </p>
            <div className="mx-2">
              <li className="text-xl">Trái cây tươi ngon theo mùa</li>
              <li className="text-xl">Rau củ quả sạch và an toàn</li>
              <li className="text-xl">Thực phẩm hữu cơ đạt chuẩn</li>
            </div>
          </div>
          <div className="p-3">
            <img
              src={images.vuonsaurieng}
              alt=""
              className="rounded-lg shadow-lg shadow-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
