// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlyShop from "./pages/FlyShop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/drone-tour">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flyshop" element={<FlyShop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
