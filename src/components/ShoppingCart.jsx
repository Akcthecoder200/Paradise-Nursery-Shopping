import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../store";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.plantDetail.price),
    0
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        ) : (
          <table className="table-auto w-full border border-gray-300 text-left mb-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Unit Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Total</th>
                <th className="border px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ plantDetail, quantity }) => (
                <tr key={plantDetail.id}>
                  <td className="border px-4 py-2">
                    <img
                      src={plantDetail.image}
                      alt={plantDetail.name}
                      className="w-16 h-16 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="border px-4 py-2">{plantDetail.name}</td>
                  <td className="border px-4 py-2">
                    ${parseFloat(plantDetail.price).toFixed(2)}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              plantId: plantDetail.id,
                              newQuantity: quantity - 1,
                            })
                          )
                        }
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              plantId: plantDetail.id,
                              newQuantity: quantity + 1,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    ${(quantity * parseFloat(plantDetail.price)).toFixed(2)}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => dispatch(removeFromCart(plantDetail.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="text-right text-xl font-semibold mt-4">
          Grand Total: ${grandTotal.toFixed(2)}
        </div>
        <div className="flex justify-between mt-8 gap-4">
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold w-1/2"
            onClick={() => navigate("/SelectionPage")}
          >
            Continue Shopping
          </button>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold w-1/2"
            onClick={() => alert("Checkout functionality coming soon!")}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
