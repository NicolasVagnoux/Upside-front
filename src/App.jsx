import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
