import React from "react";

const Product = ({ id, title, price, imgURL, clickFunc }) => {
  return (
    <div id={id} className="product">
      <img style={{ height: "200px", width: "200px" }} src={imgURL} alt="" />
      <h1>{title}</h1>
      <h2>{price} $</h2>
      <button onClick={clickFunc}>buy</button>
    </div>
  );
};
export default Product;
