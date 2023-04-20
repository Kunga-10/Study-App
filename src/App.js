import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar"
import { useState } from "react";
import About from './components/About'
import Contact from './components/Contact'
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const[islogin, setIsLogIn]= useState(false);
  return(
   <div>
     <Navbar islogin={islogin}  setIsLogIn={setIsLogIn}/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={
        <PrivateRoute islogin={islogin}><Dashboard/></PrivateRoute>
      }/>
      <Route path="/login" element={<Login setIsLoginIn={setIsLogIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoginIn={setIsLogIn}/>}/>
      <Route path="/contact" element={<Contact setIsLoginIn={setIsLogIn}/>}/>
      <Route path="/about" element={<About setIsLoginIn={setIsLogIn}/>}/>

     </Routes>
   </div>
  )
}

export default App;
