import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage";
import MyOrder from "../pages/MyOrder/MyOrder";
import DetailOrderPage from "../pages/DetailOrderPage/DetailOrderPage";
import EditProfile from "../pages/EditProfile/EditProfile";
import RegisterShop from "../pages/RegisterShop/RegisterShop";
import ComfirmShopping from "../pages/ComfirmShopping/ComfirmShopping";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: false },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "/login", page: <LoginPage />, isShowHeader: true },
  { path: "/register", page: <RegisterPage />, isShowHeader: true },
  { path: "/product/detail/:id", page: <DetailPage />, isShowHeader: true },
  { path: "/user/profile", page: <ProfilePage />, isShowHeader: true },
  { path: "/user/profile/edit/:id", page: <EditProfile />, isShowHeader: true },
  { path: "/user/comfirmshop", page: <ComfirmShopping />, isShowHeader: true },
  { path: "/user/registershop", page: <RegisterShop />, isShowHeader: true },
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
