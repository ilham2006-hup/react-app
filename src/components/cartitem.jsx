import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/cartslice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="info">
        <strong>{item.name}</strong>
<span>{(item.price * item.quantity).toLocaleString("fr-FR")} DA</span>        <div className="qty">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
      </div>
      <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
        ✕
      </button>
    </div>
  );
}