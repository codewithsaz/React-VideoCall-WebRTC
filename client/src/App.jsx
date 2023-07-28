import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import Lobby from "./screens/Lobby/Lobby";
import SignUp from "./screens/SignUp/SignUp";
import Room from "./screens/Room/Room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
