import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchData } from "../api";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <h2>List of products</h2>
      {data.map((item) => (
        <NavLink
          to={`/detailPage/${item.id}`}
          className=""
          id={item.id}
          key={item.id}
        >
          <div key={item.id} className="item-div">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HomePage;
