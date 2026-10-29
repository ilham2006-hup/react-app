import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <span className="tag">{product.group} · {product.category}</span>
      <h3>{product.name}</h3>
     <p className="price">{product.price.toLocaleString("fr-FR")} DA</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
}