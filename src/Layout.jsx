import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

function Layout({ children, isLoggedIn }) {
  return (
    <div className="font-body">
      <Navbar isLoggedIn={isLoggedIn} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
