import { Link } from "react-router-dom";

const MenuAdminComponent = () => {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/admin"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 duration-700 sm:mx-6"
          >
            Trang chủ
          </Link>

          <Link
            to="/admin/product"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Sản phẩm
          </Link>
          <Link
            to="/admin/category"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Thể loại
          </Link>
          <Link
            to="/admin/order"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Đơn hàng
          </Link>
          <Link
            to="/admin/user"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 duration-700 mx-1.5 sm:mx-6"
          >
            Quản lý người dùng
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MenuAdminComponent;
