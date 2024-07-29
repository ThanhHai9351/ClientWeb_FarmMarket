import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"));
const DetailPage = lazy(() => import("../pages/DetailPage/DetailPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const ShoppingCartPage = lazy(() =>
  import("../pages/ShoppingCartPage/ShoppingCartPage")
);
const MyOrder = lazy(() => import("../pages/MyOrder/MyOrder"));
const DetailOrderPage = lazy(() =>
  import("../pages/DetailOrderPage/DetailOrderPage")
);
const EditProfile = lazy(() => import("../pages/EditProfile/EditProfile"));
const RegisterShop = lazy(() => import("../pages/RegisterShop/RegisterShop"));
const ComfirmShopping = lazy(() =>
  import("../pages/ComfirmShopping/ComfirmShopping")
);
const HomePageNSX = lazy(() => import("../pages/NSX/HomePageNSX/HomePageNSX"));
const ProductNSX = lazy(() => import("../pages/NSX/ProductNSX/ProductNSX"));
const OrderNSX = lazy(() => import("../pages/NSX/OrderNSX/OrderNSX"));
const ChangePasswordPage = lazy(() =>
  import("../pages/ChagePasswordPage/ChangePasswordPage")
);
const EditProfileNSX = lazy(() =>
  import("../pages/NSX/EditProfileNSX/EditProfileNSX")
);
const ChangeKeyShop = lazy(() =>
  import("../pages/NSX/ChangeKeyShop/ChangeKeyShop")
);
const CreateProductNSX = lazy(() =>
  import("../pages/NSX/CreateProductNSX/CreateProductNSX")
);
const CreateCategoryNSX = lazy(() =>
  import("../pages/NSX/CreateCategoryNSX/CreateCategoryNSX")
);
const EditProductNSX = lazy(() =>
  import("../pages/NSX/EditProductNSX/EditProductNSX")
);
const HomePageAdmin = lazy(() =>
  import("../pages/Admin/HomePageAdmin/HomePageAdmin")
);
const ProductPageAdmin = lazy(() =>
  import("../pages/Admin/ProductPageAdmin/ProductPageAdmin")
);
const CategoryPageAdmin = lazy(() =>
  import("../pages/Admin/CategoryPageAdmin/CategoryPageAdmin")
);
const OrderPageAdmin = lazy(() =>
  import("../pages/Admin/OrderPageAdmin/OrderPageAdmin")
);
const UserPageAdmin = lazy(() =>
  import("../pages/Admin/UserPageAdmin/UserPageAdmin")
);
const EditProductAdmin = lazy(() =>
  import("../pages/Admin/EditProductAdmin/EditProductAdmin")
);
const EditCategoryAdmin = lazy(() =>
  import("../pages/Admin/EditCategoryAdmin/EditCategoryAdmin")
);
const OrderDetailAdmin = lazy(() =>
  import("../pages/Admin/OrderDetailAdmin/OrderDetailAdmin")
);
const CreateUserAdmin = lazy(() =>
  import("../pages/Admin/CreateUserAdmin/CreateUserAdmin")
);

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
  { path: "/admin/user/create", page: <CreateUserAdmin />, isShowHeader: true },
  { path: "*", page: <NotFoundPage />, isShowHeader: false },
];
