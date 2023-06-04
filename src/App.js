import React from "react";
import { Routes,Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="nav">Social Media App</h1>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/detail" element={<DetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
