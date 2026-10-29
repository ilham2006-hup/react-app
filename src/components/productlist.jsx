import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./productcard";

const groups = ["All", "Clothes", "Shoes", "Accessories"];

const subCategories = {
  Clothes: ["Men", "Women"],
  Shoes: ["Men", "Women"],
  Accessories: ["Bags", "Jewelry", "Others"],
};

export default function ProductList() {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const [sub, setSub] = useState("All");

  const handleGroup = (g) => {
    setGroup(g);
    setSub("All");
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (group === "All" || p.group === group) &&
      (sub === "All" || p.category === sub)
  );

  return (
    <section className="products">
      <input
        className="search"
        type="text"
        placeholder="Search a product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Row 1: Clothes / Shoes / Accessories */}
      <div className="filters">
        {groups.map((g) => (
          <button
            key={g}
            className={g === group ? "filter active" : "filter"}
            onClick={() => handleGroup(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Row 2: Men / Women (or Bags / Jewelry / Others) */}
      {group !== "All" && (
        <div className="filters sub">
          {["All", ...subCategories[group]].map((c) => (
            <button
              key={c}
              className={c === sub ? "filter active-sub" : "filter"}
              onClick={() => setSub(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </section>
  );
}