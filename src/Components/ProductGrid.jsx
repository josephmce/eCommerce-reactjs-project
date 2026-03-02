const products = [
  { id: 1, name: "Protein Powder", price: 29.99 },
  { id: 2, name: "Creatine Monohydrate", price: 19.99 },
  { id: 3, name: "Pre-Workout", price: 24.99 },
];

import { useState } from "react";

export default function ProductGrid(){
    const [addedItems, setAddedItems] = useState([]);
    return (
        <div className="grid grid-cols-3 gap-8">
            {products.map(product => (
            <div key={product.id} className="border p-4 rounded">
            <h2 className="font-semibold">
                {product.name}
            </h2>
            <p>£{product.price}</p>

            <button onClick={() => setAddedItems(prev => [...prev, product.id])}className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                {addedItems.includes(product.id) ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}