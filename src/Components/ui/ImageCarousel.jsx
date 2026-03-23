import { useState } from "react";

import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";
import img7 from "../../assets/img-7.png";
import img8 from "../../assets/img-8.png";
import { Link } from "react-router-dom";

export default function ImageCarousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [index, setIndex] = useState(0);

  const cardWidth = 220 + 40;
  const visibleCards = 4;
  const startOffset = 20;

  const minIndex = 0;
  const maxIndex = images.length - visibleCards;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, minIndex));
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b h-[400px]">
        <Link to="/products" className="hover:cursor-pointer">
      <div
        className="flex gap-10 transition-transform duration-500 ease-in-out absolute bottom-0"
        style={{
          transform: `translateX(${startOffset - index * cardWidth}px)`
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-80 rounded-[32px] shrink-0"
            alt={`carousel image ${i + 1}`}
          />
        ))}
      </div>
        </Link>

      <button
        onClick={prev}
        className="absolute left-4 bottom-40 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-700 text-white hover:cursor-pointer"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 bottom-40 -translate-y-1/2 w-11 h-11 rounded-full bg-neutral-700 text-white hover:cursor-pointer"
      >
        →
      </button>
    </div>
  );
}