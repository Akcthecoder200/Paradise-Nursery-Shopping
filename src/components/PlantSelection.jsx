import React from "react";
import plants from "../utils";

function PlantSelection({ onAddToCart, cart }) {
  // Helper to check if plant is in cart
  const isInCart = (plantId) =>
    cart.some((item) => item.plantDetail.id === plantId);

  return (
    <div>
      <h1 className="text-2xl  font-bold text-center my-4 ">Plant Selection</h1>
      <div className="grid grid-cols-4">
        {plants.map((plantDetail) => {
          const inCart = isInCart(plantDetail.id);
          return (
            <div
              key={plantDetail.id}
              className="flex flex-col items-center justify-center p-6"
            >
              <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src={plantDetail.image}
                    alt={plantDetail.name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {plantDetail.name}
                  </h3>
                  <p className="text-xl font-bold text-green-600 mt-2">
                    ${plantDetail.price}
                  </p>
                  <button
                    className={`mt-4 px-4 py-2 rounded-md text-white text-lg font-semibold ${
                      inCart
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => onAddToCart(plantDetail)}
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlantSelection;
