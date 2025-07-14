import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "../store";
import Layout from "./Layout";
import PlantSelection from "./PlantSelection";
import { useNavigate } from "react-router-dom";

function SelectionPage() {
  const [page, setPage] = useState("plants");
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add plant to cart or increase quantity
  const handleAddToCart = (plantDetail) => {
    dispatch(addToCart(plantDetail));
  };

  // Update quantity in cart
  const handleUpdateQuantity = (plantId, newQuantity) => {
    dispatch(updateQuantity({ plantId, newQuantity }));
  };

  // Remove plant from cart
  const handleRemoveFromCart = (plantId) => {
    dispatch(removeFromCart(plantId));
  };

  return (
    <div>
      {/* navbar */}
      <Layout setPage={setPage} />

      <div className="flex justify-end m-4">
        <button
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
          onClick={() => navigate("/cart")}
        >
          Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {page === "plants" && <PlantSelection />}
    </div>
  );
}

export default SelectionPage;
