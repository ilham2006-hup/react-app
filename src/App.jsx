import { useState } from "react";
import Header from "./components/header";
import ProductList from "./components/productlist";
import Cart from "./components/cart";

export default function App() {
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      <Header onToggleCart={() => setShowCart(!showCart)} />
      <main className="layout">
        <ProductList />
        {showCart && <Cart />}
      </main>
    </>
  );
}