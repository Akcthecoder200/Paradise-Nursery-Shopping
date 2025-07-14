# Paradise Nursery Shopping

## Short Description

Paradise Nursery Shopping is a modern web application that allows users to browse, select, and purchase a variety of plants. The app features a seamless shopping experience with a real-time cart, quantity controls, and a visually appealing interface.

---

## Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Package Management:** npm

---

## Features

- **Plant Selection:** Browse a curated list of plants, view images, names, and prices.
- **Add to Cart:** Add plants to your shopping cart directly from the selection page.
- **Quantity Controls:** Adjust the quantity of each plant in your cart or from the plant card.
- **Shopping Cart Page:** View all selected plants on a dedicated cart page, update quantities, remove items, and see the grand total in real time.
- **Continue Shopping:** Button on the cart page to return to plant selection.
- **Checkout:** Button on the cart page to proceed to checkout (placeholder for future checkout flow).
- **Responsive UI:** Clean, modern, and mobile-friendly interface.

---

## Installation Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/paradise-nursery-shopping.git
   cd paradise-nursery-shopping
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

---

## Usage Instructions

- **Browse Plants:** The main page displays a grid of available plants with images, names, and prices.
- **Add to Cart:** Click the "Add to Cart" button on any plant to add it to your shopping cart. If already added, the button will indicate so.
- **Adjust Quantities:** Use the + and - buttons on the plant card or in the shopping cart to change the quantity of each plant.
- **View Cart:** Click the cart button to navigate to the dedicated Shopping Cart page (`/cart`), where you can review your selections, update quantities, remove items, and see the grand total.
- **Continue Shopping:** Click the "Continue Shopping" button on the cart page to return to plant selection.
- **Checkout:** Click the "Checkout" button on the cart page to proceed (currently a placeholder for future checkout functionality).

---

## Key Components

- **PlantSelection:** Displays a grid of all available plants. Allows users to add plants to the cart and visually indicates which plants are already in the cart.
- **PlantCard:** Shows individual plant details with image, name, price, and quantity controls (+/- buttons). Updates the selected quantity and manages the selected plants state.
- **ShoppingCart:** Dedicated page that lists all plants added to the cart, with options to update quantities, remove items, and view the grand total. Includes Continue Shopping and Checkout buttons.

---

## Project Structure

```
Paradise Nursery Shopping/
├── public/
│   └── images/           # Plant images for the UI
├── src/
│   ├── components/       # React components (PlantSelection, PlantCard, ShoppingCart, etc.)
│   ├── assets/           # Static assets (e.g., SVGs)
│   ├── utils.js          # Plant data and utility functions
│   ├── store.js          # Redux store and cart slice
│   ├── App.jsx           # Main app entry
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Global styles (Tailwind)
├── index.html            # HTML template
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## Contributors

- [Arvind Kumar]

---

## License

MIT


