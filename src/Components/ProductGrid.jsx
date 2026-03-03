import { useState } from "react"; 
import ProductCard from "./ProductCard";


export default function ProductGrid({ products, cartItems, setCartItems }) {
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