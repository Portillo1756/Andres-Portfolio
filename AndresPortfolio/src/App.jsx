import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="APP">
          <div>
            <Navbar />
            <Outlet />
          </div>
      </div>
    </>
  );
}

export default App
