import React from "react";
import { Link, NavLink } from "react-router-dom";

function Layout({ setPage }) {
  return (
    <div>
      {/* navbar */}
      <nav>
        <div className="flex justify-between items-center bg-blue-900 p-4">
          <h1 className="text-2xl font-bold leading-tight">Paradise Nursery</h1>

          <button onClick={() => setPage("plants")}>
            <h3 className="text-white">Plants</h3>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Layout;
