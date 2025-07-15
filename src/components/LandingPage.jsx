// import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/SelectionPage");
  };
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/bg website.webp")',
      }}
    >
      <div className=" bg-opacity-60 w-full h-full flex items-center px-10">
        {/* Left Section */}
        <div className="w-1/2  space-y-6">
          <h1 className="text-4xl font-bold">Welcome To</h1>
          <h2 className="text-5xl font-bold text-green-400">
            Paradise Nursery
          </h2>
          <p className="italic">Where Green Meets Serenity</p>

          <button
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="w-1/2  text-sm space-y-4 max-w-xl">
          <h3 className="text-center text-lg font-bold">
            Welcome to Paradise Nursery, where green meets serenity!
          </h3>
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality
            plants that not only enhance the beauty of your surroundings but
            also contribute to a healthier and more sustainable lifestyle. From
            air-purifying plants to aromatic fragrant ones, we have something
            for every plant enthusiast.
          </p>
          <p>
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you’re a seasoned
            gardener or just starting your green journey, we’re here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
