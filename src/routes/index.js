import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: true },
  { path: "/order", page: <OrderPage />, isShowHeader: true },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  {
    path: "*",
    page: <NotFoundPage />,
    isShowHeader: false,
  },
];
