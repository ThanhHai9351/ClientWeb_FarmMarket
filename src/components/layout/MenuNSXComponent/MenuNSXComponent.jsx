import { Link } from "react-router-dom";

const MenuNSXComponent = () => {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/shop"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 duration-700 sm:mx-6"
          >
            Trang chủ
          </Link>

          <Link
            to="/shop/product"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Sản phẩm của tôi
          </Link>
          <Link
            to="/shop/order"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Đơn hàng
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MenuNSXComponent;
