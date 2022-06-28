import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detailPage/:currentData" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
