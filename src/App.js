import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/products" element={<Products />}>
          Products
        </Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
      </Routes>
    </div>
  );
}

export default App;
