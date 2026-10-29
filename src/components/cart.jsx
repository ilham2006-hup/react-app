import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartslice";
import CartItem from "./cartitem";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((i) => (
        <CartItem key={i.id} item={i} />
      ))}
      {items.length > 0 && (
        <>
          <h3>Total: {total.toLocaleString("fr-FR")} DA</h3>
          <button className="clear" onClick={() => dispatch(clearCart())}>
            Clear cart
          </button>
        </>
      )}
    </aside>
  );
}