import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/DetailPage';
import { fetchData } from './components/api';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage data={data} itemsPerPage={2} />} />
        <Route path="/detailPage/:currentData" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
