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
import HomePageNSX from "../pages/NSX/HomePageNSX/HomePageNSX";
import ProductNSX from "../pages/NSX/ProductNSX/ProductNSX";
import OrderNSX from "../pages/NSX/OrderNSX/OrderNSX";
import ChangePasswordPage from "../pages/ChagePasswordPage/ChangePasswordPage";
import EditProfileNSX from "../pages/NSX/EditProfileNSX/EditProfileNSX";
import ChangeKeyShop from "../pages/NSX/ChangeKeyShop/ChangeKeyShop";
import CreateProductNSX from "../pages/NSX/CreateProductNSX/CreateProductNSX";
import CreateCategoryNSX from "../pages/NSX/CreateCategoryNSX/CreateCategoryNSX";
import EditProductNSX from "../pages/NSX/EditProductNSX/EditProductNSX";
import HomePageAdmin from "../pages/Admin/HomePageAdmin/HomePageAdmin";
import ProductPageAdmin from "../pages/Admin/ProductPageAdmin/ProductPageAdmin";
import CategoryPageAdmin from "../pages/Admin/CategoryPageAdmin/CategoryPageAdmin";
import OrderPageAdmin from "../pages/Admin/OrderPageAdmin/OrderPageAdmin";
import UserPageAdmin from "../pages/Admin/UserPageAdmin/UserPageAdmin";
import EditProductAdmin from "../pages/Admin/EditProductAdmin/EditProductAdmin";
import EditCategoryAdmin from "../pages/Admin/EditCategoryAdmin/EditCategoryAdmin";
import OrderDetailAdmin from "../pages/Admin/OrderDetailAdmin/OrderDetailAdmin";
import CreateUserAdmin from "../pages/Admin/CreateUserAdmin/CreateUserAdmin";

export const routes = [
  { path: "/", page: <HomePage />, isShowHeader: false },
  { path: "/product", page: <ProductPage />, isShowHeader: true },
  { path: "/login", page: <LoginPage />, isShowHeader: true },
  { path: "/register", page: <RegisterPage />, isShowHeader: true },
  { path: "/product/detail/:id", page: <DetailPage />, isShowHeader: true },
  { path: "/user/profile", page: <ProfilePage />, isShowHeader: true },
  { path: "/user/profile/edit/:id", page: <EditProfile />, isShowHeader: true },
  {
    path: "/user/profile/changepassword",
    page: <ChangePasswordPage />,
    isShowHeader: true,
  },
  { path: "/user/comfirmshop", page: <ComfirmShopping />, isShowHeader: true },
  { path: "/user/registershop", page: <RegisterShop />, isShowHeader: true },
  { path: "/shop", page: <HomePageNSX />, isShowHeader: true },
  { path: "/shop/product", page: <ProductNSX />, isShowHeader: true },
  { path: "/shop/order", page: <OrderNSX />, isShowHeader: true },
  { path: "/shop/edit", page: <EditProfileNSX />, isShowHeader: true },
  {
    path: "/shop/product/edit/:id",
    page: <EditProductNSX />,
    isShowHeader: true,
  },
  {
    path: "/shop/category/create",
    page: <CreateCategoryNSX />,
    isShowHeader: true,
  },
  {
    path: "/shop/product/create",
    page: <CreateProductNSX />,
    isShowHeader: true,
  },
  {
    path: "/shop/edit/changepassword",
    page: <ChangeKeyShop />,
    isShowHeader: true,
  },
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
  { path: "/admin", page: <HomePageAdmin />, isShowHeader: true },
  { path: "/admin/product", page: <ProductPageAdmin />, isShowHeader: true },
  { path: "/admin/category", page: <CategoryPageAdmin />, isShowHeader: true },
  { path: "/admin/order", page: <OrderPageAdmin />, isShowHeader: true },
  { path: "/admin/user", page: <UserPageAdmin />, isShowHeader: true },
  {
    path: "/admin/product/edit/:id",
    page: <EditProductAdmin />,
    isShowHeader: true,
  },
  {
    path: "/admin/order/detail/:id",
    page: <OrderDetailAdmin />,
    isShowHeader: true,
  },
  {
    path: "/admin/category/edit/:id",
    page: <EditCategoryAdmin />,
    isShowHeader: true,
  },
  {
    path: "/admin/user/create",
    page: <CreateUserAdmin />,
    isShowHeader: true,
  },
  {
    path: "*",
    page: <NotFoundPage />,
    isShowHeader: false,
  },
];
