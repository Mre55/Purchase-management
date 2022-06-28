import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPurchaseDetail } from "../api";

import './DetailPage.css';

const DetailPage = () => {
  const [data, setData] = useState([]);
  const { currentData } = useParams();
  console.log("currentData is ", currentData);

  useEffect(() => {
    fetchPurchaseDetail(currentData)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("data is ", data);

  return (
    <div className="container">
      {data && !data.length
        ? <h1 className="no-item">No item with this id</h1>
        : data.map((item) => (
            <div key={item.id} className="item-div">
              <h1>Item price per piece is {item.pricePerPiece}</h1>
              <p>Quantity {item.quantity}</p>
              <p>Date {item.purchasedOn}</p>
            </div>
          ))}
    </div>
  );
};

export default DetailPage;
