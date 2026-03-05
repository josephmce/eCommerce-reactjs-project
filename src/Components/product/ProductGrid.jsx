import { useState } from "react"; 
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";


export default function ProductGrid({ cartItems, setCartItems }) {
  const products = useSelector(state => state.products.items); // Get products from Redux store
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