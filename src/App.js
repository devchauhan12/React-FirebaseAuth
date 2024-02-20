import React from "react";
import './App.css';
import './stylesheets/style.css'
// import NavBar from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import DashBoard from "./components/DashBoard.jsx";




function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
