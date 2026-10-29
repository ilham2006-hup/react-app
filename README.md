# L'Élégance

Online store for classic and elegant fashion, for men and women.

**Student:** [Your full name]
**Module:** ENSTA - WAMD - TD/TP 2 (React + Redux)

## About

L'Élégance is a small e-commerce frontend made with React and Redux Toolkit. It sells shirts, trousers, jeans, sweaters, shoes and accessories (bags, watches, caps).

You can browse the products, search, filter by category, add things to the cart, change quantities, remove items and see the total price in DA. The page update everytime the cart change.

There is no backend, no database, no login and no payment (not needed for this lab).

## Technologies

| Tech | Used for |
|---|---|
| React (Vite) | Interface and components |
| JavaScript ES6+ | App logic |
| Redux Toolkit | Global state |
| React-Redux | Connect components to the store |
| CSS3 | Styling, beige theme, responsive |
| Google Fonts | Header font |
| Node.js / npm | Dependencies and dev server |
| Git / GitHub | Version control and submision |

## Project structure

```
ilham-store/
├── public/images/        # product pictures
├── src/
│   ├── components/       # Header, ProductList, ProductCard, Cart, CartItem
│   ├── redux/            # store.js, cartSlice.js
│   ├── data/products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

## Components

| Component | What it does |
|---|---|
| `App` | Main component, keeps `showCart` state |
| `Header` | Logo, tagline, cart button with counter |
| `ProductList` | Search bar, filters and product grid |
| `ProductCard` | One product with "Add to cart" button |
| `Cart` | List of cart items, total, "Clear cart" |
| `CartItem` | One cart line with + / - and remove |

## Redux

The cart is in `src/redux/cartSlice.js` (made with `createSlice`) and the store is in `store.js`.

```js
state.cart = {
  items: [{ id, name, group, category, price, image, quantity }]
}
```

| Action | Effect |
|---|---|
| `addToCart(product)` | Add product or +1 if already in cart |
| `removeFromCart(id)` | Remove product |
| `increaseQuantity(id)` | Quantity + 1 |
| `decreaseQuantity(id)` | Quantity - 1 (min 1) |
| `clearCart()` | Empty the cart |

`<Provider>` is in `main.jsx`, `useSelector` is used in `Header` and `Cart`, `useDispatch` in `ProductCard`, `CartItem` and `Cart`.

## Features

- Product catalog with images, names, prices in DA
- Add / remove from cart
- Quantity + / -
- Total updated in real time
- Clear cart
- Cart counter in header
- Search
- Filters: Clothes, Shoes, Accessories
- Sub-categories: Men / Women, and Bags / Jewelry / Others
- Custom logo, font and beige theme
- Responsive (desktop and mobile)

## How to run

You need Node.js and npm.

```bash
git clone https://github.com/ilham2006-hup/react-app
cd ilham-store
npm install
npm run dev
```

Then open `http://localhost:5173/` (or the adress shown in the terminal).

Production build:

```bash
npm run build
```

