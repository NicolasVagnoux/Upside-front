import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProject from "./components/AddProject";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import DashboardHome from "./components/dashboard/DashboardHome";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/newproject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
