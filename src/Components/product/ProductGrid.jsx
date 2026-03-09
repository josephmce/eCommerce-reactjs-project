import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductGrid() {
  const dispatch = useDispatch();

  const { items: products, loading, error } = useSelector(
    state => state.products
  );

  // Local loading state for debugging/throttling
  //const [loading, setLoading] = useState(true);

  // Original fetch products effect
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Debug effect to simulate slow loading
  /*useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // stop fake loading after 5s
    }, 10000);

    return () => clearTimeout(timer);
  }, []);*/

  // Decide what to show based on loading / error / data
  if (loading) return <div className="grid grid-cols-3 gap-6">
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
    <ProductCardSkeleton />
  </div>;
  if (error) return <div className="flex items-center justify-center p-4">
  <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md max-w-md text-center">
    <h2 className="text-xl font-semibold mb-2">Oops!</h2>
    <p className="text-sm">
      {error || "Something went wrong while fetching products."}
    </p>
  </div>
</div>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}