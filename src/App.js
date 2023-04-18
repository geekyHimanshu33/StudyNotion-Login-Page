import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import { useState } from "react";
import SignUp from "./components/SignUp";

function App() {

  const [isLogIn,setisLogIn] = useState(false)
  return (
    <div className=" text-white ">
      <Nav isLogIn = {isLogIn} setisLogIn ={setisLogIn} />

      <Routes>
        
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Login" element={<LoginPage isLogIn={isLogIn} setisLogIn ={setisLogIn} ></LoginPage>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Signup" element={<SignUp isLogIn = {isLogIn} setisLogIn ={setisLogIn}></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
