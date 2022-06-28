import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import DetailPage from "./components/DetailPage/DetailPage";
import { fetchData } from "./components/api";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(2);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage data={currentRecords} itemsPerPage={2} />}
        />
        <Route path="/detailPage/:currentData" element={<DetailPage />} />
      </Routes>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
