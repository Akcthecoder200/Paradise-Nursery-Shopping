import React from "react";

function PlantCard({
  plantDetail,
  plantnum,
  setPlantCounts,
  setSelectedPlants,
}) {
  const handlePlantChange = (plantDetail, count) => {
    setPlantCounts((prev) => ({
      ...prev,
      [plantDetail.id]: count,
    }));
    setSelectedPlants((prevSelectedPlants) => {
      const existingIndex = prevSelectedPlants.findIndex(
        (p) => p.plantDetail.id === plantDetail.id
      );
      if (count === 0) {
        return prevSelectedPlants.filter(
          (p) => p.plantDetail.id !== plantDetail.id
        );
      }
      if (existingIndex !== -1) {
        const updated = [...prevSelectedPlants];
        updated[existingIndex] = { plantDetail, count };
        return updated;
      }
      return [...prevSelectedPlants, { plantDetail, count }];
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={plantDetail.image}
            alt={plantDetail.name}
            className="object-cover h-full w-full"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {plantDetail.name}
          </h3>
          <p className="text-xl font-bold text-green-600 mt-2">
            ${plantDetail.price}
          </p>

          {/* Button Group */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold"
              onClick={() => handlePlantChange(plantDetail, plantnum + 1)}
            >
              +
            </button>
            <h3>{plantnum}</h3>
            <button
              className="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 text-lg font-semibold"
              onClick={() =>
                handlePlantChange(plantDetail, Math.max(0, plantnum - 1))
              }
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
