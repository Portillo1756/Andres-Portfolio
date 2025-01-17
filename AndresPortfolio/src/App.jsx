import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className="APP">
          <div>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App
