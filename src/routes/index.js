import React from 'react';
import CheckoutPage from '../containers/CheckoutPage';
const HomePage = React.lazy(() => import('../containers/HomPage'))
const LoginPage = React.lazy(() => import('../containers/LoginPage'))
const RegisterPage = React.lazy(() => import('../containers/RegisterPage'))
const ShopPage = React.lazy(() => import('../containers/ShopPage'))
const CartPage = React.lazy(() => import('../containers/CartPage'))
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'))
const ProductDetailsPage = React.lazy(() => import('../containers/ProductDetailsPage'))
const routes = [
  {
    component: HomePage,
    extra: true,
    path: '/'
  },
  {
    component: ShopPage,
    extra: true,
    path: '/danh-muc/:slug'
  },
  {
    component: LoginPage,
    extra: true,
    path: '/dang-nhap',
    isPrivate: true
  },
  {
    component: RegisterPage,
    extra: true,
    path: '/dang-ky',
    isPrivate: true
  },
  {
    component: CartPage,
    extra: true,
    path: '/gio-hang',
    isPrivate: false
  },
  {
    component: ProductDetailsPage,
    extra: true,
    path: '/san-pham/:slug',
    isPrivate: false
  },
  {
    component: CheckoutPage,
    extra: true,
    path: '/thanh-toan',
    isPrivate: false
  },
  {
    component: NotFoundPage,
    extra: true,
    path: '',
    isPrivate: false
  },

]

export default routes