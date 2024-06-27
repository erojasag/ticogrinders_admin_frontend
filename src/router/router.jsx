import { Route, Routes } from 'react-router-dom';
import Home from '../pages/dashboard';
import Login from '../pages/login';
import GoogleSuccess from '../pages/googleSuccess';
import Error404 from '../pages/error404';
import Orders from '../pages/orders';
import Order from '../pages/order';
import Inventory from '../pages/inventory';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/google/auth/success" element={<GoogleSuccess />} />
      <Route path="/orders/" element={<Orders />} />
      <Route path="/order/:orderId" element={<Order />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
