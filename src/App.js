import Home from "./pages/Home";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-bar/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductDetail />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
