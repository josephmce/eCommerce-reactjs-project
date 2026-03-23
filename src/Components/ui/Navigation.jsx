import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navigation({ variant = "default" }) {
  const variantClasses = {
    default: "max-w-6xl mx-auto bg-[#465257] p-2 rounded-full flex gap-4 justify-center h-[52px]",
    secondary: "max-w-6xl mx-auto",
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get("category"); // gets "men's clothing", "women's clothing", etc.

  const categories = [
    { label: "Home", path: "/", category: null },
    { label: "Mens", path: "/products?category=men's+clothing&sort=none", category: "men's clothing" },
    { label: "Womens", path: "/products?category=women's+clothing&sort=none", category: "women's clothing" },
    { label: "Accessories", path: "/products?category=jewelery&sort=none", category: "jewelery" },
  ];

  return (
    <div className={variantClasses[variant]}>
      {categories.map(({ label, path, category }) => {
        const isActive = category === activeCategory || (!category && location.pathname === "/");

        return (
          <Link key={label} to={path} className="h-auto">
            <Button variant={isActive ? "nav_primary" : "nav_unselected"}>
              {label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}