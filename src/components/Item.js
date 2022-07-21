import React, { useState } from "react";

function Item({ name, category, addToCart }) {
  const [isCartItem, setIsCartItem] = useState(false);

  return (
    <li className={isCartItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={() => setIsCartItem((isCartItem) => !isCartItem)}
        className="add"
      >
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
