import React, { useState } from "react";
import Layout from "./Layout";
import PlantSelection from "./PlantSelection";
import ShoppingCart from "./ShoppingCart";

function SelectionPage() {
  const [page, setPage] = useState("meals");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // [{ plantDetail, quantity }]

  // Add plant to cart or increase quantity
  const handleAddToCart = (plantDetail) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.plantDetail.id === plantDetail.id
      );
      if (existingIndex !== -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevCart, { plantDetail, quantity: 1 }];
    });
  };

  // Update quantity in cart
  const handleUpdateQuantity = (plantId, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.plantDetail.id === plantId
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove plant from cart
  const handleRemoveFromCart = (plantId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.plantDetail.id !== plantId)
    );
  };

  return (
    <div>
      {/* navbar */}
      <Layout setPage={setPage} />

      <div className="flex justify-end m-4">
        <button
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
          onClick={() => setCartOpen((open) => !open)}
        >
          Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {cartOpen && (
        <ShoppingCart
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
          onClose={() => setCartOpen(false)}
        />
      )}

      {page === "plants" && (
        <PlantSelection onAddToCart={handleAddToCart} cart={cart} />
      )}
    </div>
  );
}

export default SelectionPage;
