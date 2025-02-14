"use client";

import { useEffect, useState } from "react";

interface CarouselImage {
  imageUrl: string;
}

export default function Carousel() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/carousel")
      .then((res) => res.json())
      .then((data) => {
        console.log("API 回應:", data);
        if (data && Array.isArray(data.data)) {
          setImages(data.data.map((item: CarouselImage) => `http://localhost:8080${item.imageUrl}`));
        } else {
          console.error("API 回傳格式錯誤", data);
        }
      })
      .catch((error) => console.error("Error fetching carousel:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // ✅ 2秒自動切換
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="carousel">
      {images.length > 0 && (
        <>
          <button className="carousel-btn left" onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}>⬅</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button className="carousel-btn right" onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}>➡</button>
        </>
      )}
    </section>
  );
}