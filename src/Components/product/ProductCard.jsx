import { useState } from "react";
import QuantitySelector from "../ui/QuantitySelector";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

/**
 * ProductCard
 * -----------
 * - Manages local quantity state
 * - Adds product to cart with selected quantity
 * - If product already exists in cart → updates its quantity
 * - Button always shows "Add {quantity} to Cart"
 */

export default function ProductCard({ product, cartItems, setCartItems }) {
  
  // Local quantity state (per product card)
  const [quantity, setQuantity] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * handleAdd
   * ---------
   * Adds or updates the product in the cart.
   *
   * Logic:
   * 1. Check if product already exists in cart
   * 2. If yes → update its quantity
   * 3. If no → add new item
   */
  // const handleAdd = () => {
  //   setCartItems(prev => {
  //     const existingItem = prev.find(item => item.id === product.id);

  //     // If product already exists → update quantity
  //     if (existingItem) {
  //       return prev.map(item =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + quantity }
  //           : item
  //       );
  //     }

  //     // If product does not exist → add new entry
  //     return [...prev, { id: product.id, quantity }];
  //   });
  // };
const handleAdd = () => {
  setCartItems(prev => {
    const existingItem = prev.find(item => item.id === product.id);

    if (existingItem) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }

    return [...prev, { id: product.id, quantity }];
  });

  // Open modal after updating cart
  setIsModalOpen(true);
};

  const isAdded = cartItems.some(item => item.id === product.id);
  return (

    <div className="border p-4 rounded">

      {/* Product Name */}
      <h2 className="font-semibold">{product.name}</h2>

      {/* Product Price */}
      <p>£{product.price}</p>

      {/* Quantity Selector */}
      <QuantitySelector
        quantity={quantity}
        setQuantity={setQuantity}
      />

      {/* Add to Cart Button (always shows quantity) */}
      <Button onClick={handleAdd} className="mt-4">
         {isAdded ? "Added ✓" : `Add ${quantity} to Cart`}
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className="text-lg font-semibold">
          Added to Cart 🎉
        </h2>
        <p>
          {quantity} × {product.name} added successfully.
        </p>
      </Modal>
    </div>
  );
}
