import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: true },
  { path: "/order", page: <OrderPage />, isShowHeader: true },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "/login", page: <LoginPage />, isShowHeader: true },
  { path: "/register", page: <RegisterPage />, isShowHeader: true },
  { path: "product/detail/:id", page: <DetailPage />, isShowHeader: true },
  {
    path: "*",
    page: <NotFoundPage />,
    isShowHeader: false,
  },
];
