/* eslint-disable react/prop-types */
import React from "react";

const EventList = ({ products, handleClick }) => {
  return (
    <>
      {products.map((product) => (
        <React.Fragment className="p-2" key={product.id}>
          <h2>
            {product.title} -- ${product.price}
          </h2>
          <button onClick={() => handleClick(product.id)}>
            Delete Product {product.id}
          </button>
        </React.Fragment>
      ))}
    </>
  );
};

export default EventList;
