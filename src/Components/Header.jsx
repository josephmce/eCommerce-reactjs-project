
export default function Header({ cartItems }) {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My Store</h1>
            <p className="text-sm mt-2">Items in cart: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>  {/* Display the number of items in the cart */}
        </header>
    );
}