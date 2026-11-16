"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const sliderCards = [
  {
    id: 1,
    image: "/images/slider/slider-dotnet1.jpeg",
    title: "Master .NET Fundamentals",
    category: "CLR & MEMORY",
    bookSlug: "master-net-fundamentals",
    vol: "VOL. 01",
  },
  {
    id: 2,
    image: "/images/slider/slider-dotnet2.jpeg",
    title: "Master C# Interview Preparation",
    category: "C# & ASYNC",
    bookSlug: "master-csharp-interview-preparation",
    vol: "VOL. 02",
  },
  {
    id: 3,
    image: "/images/slider/slider-dotnet3.jpeg",
    title: ".NET Developer's Interview Toolkit",
    category: "ENGINEERING & CONCURRENCY",
    bookSlug: "net-developers-interview-toolkit",
    vol: "VOL. 03",
  },
  {
    id: 4,
    image: "/images/slider/slider-dotnet4.jpeg",
    title: "Mastering the .NET Core Interview",
    category: "ASP.NET CORE & APIS",
    bookSlug: "mastering-net-core-interview",
    vol: "VOL. 04",
  },
  {
    id: 5,
    image: "/images/slider/slider-dotnet5.jpeg",
    title: "Conquer the Azure Developer Interview",
    category: "AZURE CLOUD ARCHITECTURE",
    bookSlug: "conquer-azure-developer-interview",
    vol: "VOL. 05",
  },
  {
    id: 6,
    image: "/images/slider/slider-dotnet6.jpeg",
    title: "The Complete Front-End Interview Guide",
    category: "FRONTEND & REACT",
    bookSlug: "complete-front-end-interview-guide",
    vol: "VOL. 06",
  },
  {
    id: 7,
    image: "/images/slider/slider-dotnet7.jpeg",
    title: "Software Testing Interview Secrets",
    category: "QA & STLC TESTING",
    bookSlug: "software-testing-interview-secrets",
    vol: "VOL. 07",
  },
  {
    id: 8,
    image: "/images/slider/slider-dotnet8.jpeg",
    title: "The Advanced QA Interview Handbook",
    category: "SDET AUTOMATION",
    bookSlug: "advanced-qa-interview-handbook",
    vol: "VOL. 08",
  },
];

export default function HeroSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate for smooth seamless loop
  const displayCards = [...sliderCards, ...sliderCards];

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        marginTop: "36px",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Controls Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1240px",
          margin: "0 auto 14px",
          padding: "0 24px",
        }}
      >
        <span
          style={{
            fontSize: "0.82rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.95)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FACC15" }}></span>
          INTERVIEW ARCHITECTURE &amp; CONCEPT CARDS
        </span>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={sliderRef}
        className={`hero-slider-track ${isPaused ? "paused" : ""}`}
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px 24px 24px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {displayCards.map((c, index) => (
          <Link
            key={`${c.id}-${index}`}
            href={`/books/${c.bookSlug}/`}
            style={{
              flex: "0 0 280px",
              background: "#FFFFFF",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.18)",
              border: "2px solid rgba(255, 255, 255, 0.8)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              textDecoration: "none",
              color: "inherit",
            }}
            className="slider-card-hover"
          >
            {/* Real Graphic Image from dotnet-slider */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", background: "#F3F4F6", overflow: "hidden" }}>
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="eager"
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "rgba(17, 24, 39, 0.85)",
                  color: "#FFFFFF",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {c.vol}
              </span>
            </div>

            {/* Bottom Info Strip */}
            <div
              style={{
                padding: "12px 14px",
                background: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #E5E7EB",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                  }}
                >
                  {c.category}
                </span>
                <strong
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--headline)",
                    display: "block",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "210px",
                  }}
                >
                  {c.title}
                </strong>
              </div>
              <span style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 700 }}>
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
