import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
