import Router from './router/router';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn}>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}
