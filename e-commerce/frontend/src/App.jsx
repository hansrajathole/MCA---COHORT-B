import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateProduct from "./pages/CreateProduct";

const App = () => {
  





  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      
      <Route path='/about' element={<h1>About</h1>}/>
      <Route path='/create' element={<CreateProduct/>}/>
    </Routes>
    </>
  );
};

export default App;
