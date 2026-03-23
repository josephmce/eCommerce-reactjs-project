import Button from "./Button";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Wear Your Story. Style That Speaks</h1>
                <p className="text-lg text-[#B5B5B5] mb-6">Discover curated collections that fit your life, mood, and every moment in between.</p>
                <Link to="/products">
                    <Button variant="primary">New Collection</Button>
                </Link>
            </div> 
        </div>
    );
}