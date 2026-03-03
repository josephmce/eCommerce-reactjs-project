import { useState } from "react"; 
import ProductCard from "./ProductCard";

// Sample products array
const products = [
  { id: 1, name: "Protein Powder", price: 29.99 },
  { id: 2, name: "Creatine", price: 19.99 },
  { id: 3, name: "Pre-Workout", price: 24.99 },
];

export default function ProductGrid({ cartItems, setCartItems }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}