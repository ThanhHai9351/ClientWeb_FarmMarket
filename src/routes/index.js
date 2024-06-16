import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import MyOrder from "../pages/MyOrder/MyOrder";
import DetailOrderPage from "../pages/DetailOrderPage/DetailOrderPage";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: false },
  { path: "/order", page: <OrderPage />, isShowHeader: true },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "/login", page: <LoginPage />, isShowHeader: true },
  { path: "/register", page: <RegisterPage />, isShowHeader: true },
  { path: "/product/detail/:id", page: <DetailPage />, isShowHeader: true },
  { path: "/user/profile", page: <ProfilePage />, isShowHeader: true },
  {
    path: "/user/shoppingcart",
    page: <ShoppingCartPage />,
    isShowHeader: true,
  },
  { path: "/user/myorder", page: <MyOrder />, isShowHeader: true },
  {
    path: "/user/myorder/detail/:id",
    page: <DetailOrderPage />,
    isShowHeader: true,
  },
  {
    path: "*",
    page: <NotFoundPage />,
    isShowHeader: false,
  },
];
