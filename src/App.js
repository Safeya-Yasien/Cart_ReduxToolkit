import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import Cart from "@pages/Cart";
import Products from "@pages/Products";
import NotFound from "@pages/NotFound";

import Layout from "./Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />{" "}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
