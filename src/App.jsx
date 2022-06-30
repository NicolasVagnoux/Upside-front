import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProject from "./components/AddProject";
import Home from "./components/Home";
import Landing from "./components/Landing";
import User from "./components/User";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/newproject" element={<AddProject />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
