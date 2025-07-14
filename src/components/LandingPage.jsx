// import React from "react";
import { useNavigate } from "react-router-dom";

// function LandingPage() {
//   const navigate = useNavigate();
//   const handleGetStarted = () => {
//     navigate("/SelectionPage");
//   };
//   return (
//     <div className="min-h-screen bg-black/60 flex items-center justify-center px-6">
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 text-white">
//         {/* <!-- Left Section --> */}
//         <div className="flex flex-col justify-center items-start space-y-6">
//           <h1 className="text-4xl font-bold">Welcome To</h1>
//           <h2 className="text-5xl font-bold text-green-400">
//             Paradise Nursery
//           </h2>
//           <p className="italic">Where Green Meets Serenity</p>
//           <button
//             class="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition "
//             onClick={handleGetStarted}
//           >
//             Get Started
//           </button>
//         </div>

//         {/* <!-- Right Section --> */}
//         <div className="space-y-6 text-gray-200 text-sm md:text-base">
//           <p>
//             <strong>Welcome to BudgetEase Solutions</strong>, your trusted
//             partner in simplifying budget management and financial solutions. At
//             BudgetEase, we understand the importance of effective budget
//             planning and strive to provide intuitive, user-friendly solutions to
//             meet the diverse needs of our clients.
//           </p>
//           <p>
//             With a commitment to efficiency and innovation, we empower
//             individuals and businesses to take control of their finances and
//             achieve their goals with ease.
//           </p>
//           <p>
//             At BudgetEase Solutions, our mission is to make budgeting effortless
//             and accessible for everyone. Whether you're a small business owner,
//             a busy professional, or an individual looking to manage your
//             personal finances, we offer tailored solutions to streamline your
//             budgeting process.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default LandingPage;

function LandingPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/SelectionPage");
  };
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center px-10">
        {/* Left Section */}
        <div className="w-1/2 text-white space-y-6">
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
        <div className="w-1/2 text-white text-sm space-y-4 max-w-xl">
          <h3 className="text-center text-lg font-semibold">
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
