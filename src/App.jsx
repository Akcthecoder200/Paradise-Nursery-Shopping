import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SelectionPage from "./components/SelectionPage";
import ShoppingCart from "./components/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SelectionPage" element={<SelectionPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
