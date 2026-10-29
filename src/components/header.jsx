import { useSelector } from "react-redux";

export default function Header({ onToggleCart }) {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <header className="header">
      <div className="header-side left">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="L'Élégance" />
        </a>
      </div>

      <div className="header-side right">
        <p className="store-description">
          Timeless fashion for men and women: elegant clothes, shoes and
          accessories for every occasion.
        </p>
        <button className="cart-btn" onClick={onToggleCart}>
          Cart ({count})
        </button>
      </div>
    </header>
  );
}
