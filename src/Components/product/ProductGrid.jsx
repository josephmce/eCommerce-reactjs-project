import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/cartSlice";


export default function ProductGrid() {
  const products = useSelector(state => state.products.items); // Get products from Redux store
  const dispatch = useDispatch(); // Get dispatch function from Redux store
  const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux store

  const addToCart = (product, quantity) => {
      dispatch(cartActions.addToCart({ product, quantity }));
    };
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cartItems={cartItems}
          setCartItems={addToCart}
        />
      ))}
    </div>
  );
}