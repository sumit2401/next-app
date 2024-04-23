"use client";
import React from "react";

const AddtoCart = () => {
  return (
    <div>
      <div>
        {" "}
        <button
          onClick={() => {
            console.log("click");
          }}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddtoCart;
