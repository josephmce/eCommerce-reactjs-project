import { use } from "react";
import { useEffect } from "react";
import Button from "./Button";

export default function Modal({ isOpen, onClose, children }) {
  // If not open → render nothing
  if (!isOpen) return null;

  useEffect(() => {
    const handleEsc = (event) => {
        if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white p-6 rounded shadow-lg z-10 w-96 text-black">
        
        {children}

        <Button onClick={onClose} className="mt-4">
          Close
        </Button>
      </div>
    </div>
  );
}