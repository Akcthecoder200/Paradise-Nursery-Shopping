import React from "react";

function ShoppingCart({ cart, onUpdateQuantity, onRemove, onClose }) {
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.plantDetail.price),
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[700px] max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
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
                          onUpdateQuantity(plantDetail.id, quantity - 1)
                        }
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() =>
                          onUpdateQuantity(plantDetail.id, quantity + 1)
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
                      onClick={() => onRemove(plantDetail.id)}
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
      </div>
    </div>
  );
}

export default ShoppingCart;
