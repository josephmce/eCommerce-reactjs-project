/**
 * ProductGrid Component
 * ---------------------
 * This component renders a simple product grid displaying a list of products.
 * Each product shows:
 *  - Name
 *  - Price
 *  - Add to Cart button
 *
 * The component uses React's useState hook to track which products
 * have been added to the cart. When a product is added, the button
 * text changes from "Add to Cart" to "Added ✓".
 *
 * Key Concepts Used:
 *  - Functional React Component
 *  - React useState Hook
 *  - Array.map() for rendering lists
 *  - Conditional Rendering
 *  - Immutable state updates
 */

// Static product data (normally this might come from an API)
const products = [
  { id: 1, name: "Protein Powder", price: 29.99 },
  { id: 2, name: "Creatine Monohydrate", price: 19.99 },
  { id: 3, name: "Pre-Workout", price: 24.99 },
];

// Importing the useState hook from React
// useState allows us to store and update component state
import { useState } from "react";

// Exporting the component as default so it can be imported elsewhere
export default function ProductGrid(){

    // Create a state variable called "addedItems"
    // addedItems stores an array of product IDs that have been added to the cart
    // setAddedItems is the function used to update this state
    // Initial value is an empty array (nothing added yet)
    const [addedItems, setAddedItems] = useState([]);

    // The component returns JSX (UI structure)
    return (

        // Tailwind CSS grid layout:
        // grid-cols-3 → 3 equal columns
        // gap-8 → spacing between grid items
        <div className="grid grid-cols-3 gap-8">

            {/* 
              Loop through the products array.
              For each product, render a product card.
              Array.map() transforms each product into JSX.
            */}
            {products.map(product => (

            // Each child in a list needs a unique "key" prop
            // React uses this for efficient re-rendering
            <div key={product.id} className="border p-4 rounded">

            {/* Display product name */}
            <h2 className="font-semibold">
                {product.name}
            </h2>

            {/* Display product price */}
            <p>£{product.price}</p>

            {/* 
              Button to add product to cart.
              When clicked:
              - setAddedItems is called
              - We use the functional update form (prev => ...)
              - This ensures we get the latest state value
              - We return a NEW array (immutability)
              - Spread operator (...) copies existing IDs
              - Then we add the current product.id
            */}
            <button
              onClick={() =>
                setAddedItems(prev => [...prev, product.id])
              }
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >

                {/* 
                  Conditional rendering:
                  If the product ID exists inside addedItems array,
                  show "Added ✓"
                  Otherwise show "Add to Cart"
                  
                  .includes() checks if the ID exists in the array.
                */}
                {addedItems.includes(product.id)
                  ? "Added ✓"
                  : "Add to Cart"}

          </button>
        </div>
      ))}
    </div>
  );
}