import { useState } from "react";

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border p-4 rounded-lg bg-blue-600 text-white mt-6 px-6 py-4">
            <button onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left font-semibold text-lg hover:cursor-pointer">
                {isOpen ? "Hide Details ↑" : "Show Details ↓"}
            </button>
            {isOpen && (
                <div className="mt-2 text-white">
                    {children}
                </div>
            )}
        </div>
    );
}