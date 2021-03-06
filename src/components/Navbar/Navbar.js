import React, { useState } from "react";
import { createPurchase } from "../api";

import './Navbar.css';

const Navbar = () => {
  const [inputProduct, setInputProduct] = useState({
    id: "",
    quantity: "",
    pricePerPiece: "",
  });

  const onChange = (e) => {
    setInputProduct({
      ...inputProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPurchase(
      inputProduct.id,
      inputProduct.quantity,
      inputProduct.pricePerPiece
    );
    setInputProduct({
      id: "",
      quantity: "",
      pricePerPiece: "",
    });
  };

  return (
    <div className="navbar">
      <h4>Create Product</h4>
      <form className="" onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="number"
            name="id"
            className=""
            placeholder="Id"
            onChange={onChange}
            value={inputProduct.id}
            autoComplete="off"
          />
          <input
            type="number"
            name="quantity"
            className=""
            placeholder="Quantity"
            onChange={onChange}
            value={inputProduct.quantity}
            autoComplete="off"
          />
          <input
            type="number"
            name="pricePerPiece"
            className=""
            placeholder="Price per piece"
            onChange={onChange}
            value={inputProduct.pricePerPiece}
            autoComplete="off"
          />
        </div>
        <button className="">Create</button>
      </form>
      <div>
        <h4>Filter product by date</h4>
        <form>
          <input
            type="Date"
            name="purchasedOn"
            className=""
            placeholder="Date"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
