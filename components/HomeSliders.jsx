"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, ExternalLink, ArrowRight, CheckCircle2, TrendingUp, Clock, Briefcase } from "lucide-react";
import BookCard from "./BookCard";
import { site } from "../lib/site";

// Helper hook for smooth carousel controls & active index tracking
function useCarousel(itemCount) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate approximate active index
    const cardWidth = trackRef.current.children[0]?.clientWidth || 300;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), itemCount - 1));
  };

  useEffect(() => {
    checkScroll();
    const node = trackRef.current;
    if (node) {
      node.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (node) node.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [itemCount]);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.children[0]?.clientWidth || 300;
    const scrollAmount = direction === "left" ? -(cardWidth + 16) : cardWidth + 16;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollTo = (index) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.children[0]?.clientWidth || 300;
    trackRef.current.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
  };

  return { trackRef, canScrollLeft, canScrollRight, activeIndex, scroll, scrollTo };
}

// 1. ALL-IN-ONE BUNDLE BOOKS SLIDER
export function BooksSlider({ books }) {
  const { trackRef, canScrollLeft, canScrollRight, activeIndex, scroll, scrollTo } = useCarousel(books.length);

  return (
    <div className="ios-carousel-wrapper">
      {/* Carousel Controls Header */}
      <div className="ios-carousel-header">
        <div className="ios-carousel-pagination">
          <span className="ios-carousel-counter">
            <strong>0{activeIndex + 1}</strong> / 0{books.length} Books
          </span>
          <div className="ios-carousel-dots">
            {books.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={`ios-carousel-dot ${activeIndex === i ? "active" : ""}`}
                aria-label={`Go to book ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ios-carousel-arrows">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="ios-carousel-btn"
            aria-label="Previous book"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="ios-carousel-btn"
            aria-label="Next book"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swipeable Track */}
      <div ref={trackRef} className="ios-carousel-track books-slider-track">
        {books.map((book) => (
          <div key={book.slug} className="ios-carousel-card books-slider-item">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. DESIGNED BY TOP ENGINEERS SLIDER
export function EngineersSlider({ engineers }) {
  const { trackRef, canScrollLeft, canScrollRight, activeIndex, scroll, scrollTo } = useCarousel(engineers.length);

  return (
    <div className="ios-carousel-wrapper">
      {/* Carousel Controls Header */}
      <div className="ios-carousel-header">
        <div className="ios-carousel-pagination">
          <span className="ios-carousel-counter">
            <strong>0{activeIndex + 1}</strong> / 0{engineers.length} Contributors
          </span>
          <div className="ios-carousel-dots">
            {engineers.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={`ios-carousel-dot ${activeIndex === i ? "active" : ""}`}
                aria-label={`Go to contributor ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ios-carousel-arrows">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="ios-carousel-btn"
            aria-label="Previous contributor"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="ios-carousel-btn"
            aria-label="Next contributor"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swipeable Track */}
      <div ref={trackRef} className="ios-carousel-track engineers-slider-track">
        {engineers.map((eng, idx) => (
          <div
            key={idx}
            className="ios-carousel-card engineer-slider-item"
            style={{ background: eng.bg }}
          >
            <div className="engineer-avatar" style={{ color: eng.accent }}>
              {eng.avatar}
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <h4 style={{ fontSize: "1.05rem", margin: "0 0 4px", color: "#111827", fontWeight: 700 }}>
                {eng.name}
              </h4>
              <span style={{ fontSize: "0.85rem", color: "#4B5563", display: "block", marginBottom: "8px" }}>
                {eng.role}
              </span>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#FFFFFF",
                  padding: "4px 10px",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                }}
              >
                {eng.logo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. SUCCESS CASES SLIDER (IOS CARD STYLE)
export function SuccessCasesSlider({ successCases }) {
  const { trackRef, canScrollLeft, canScrollRight, activeIndex, scroll, scrollTo } = useCarousel(successCases.length);

  return (
    <div className="ios-carousel-wrapper">
      {/* Carousel Controls Header */}
      <div className="ios-carousel-header">
        <div className="ios-carousel-pagination">
          <span className="ios-carousel-counter">
            <strong>0{activeIndex + 1}</strong> / 0{successCases.length} Placements
          </span>
          <div className="ios-carousel-dots">
            {successCases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={`ios-carousel-dot ${activeIndex === i ? "active" : ""}`}
                aria-label={`Go to case ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ios-carousel-arrows">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="ios-carousel-btn"
            aria-label="Previous case"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="ios-carousel-btn"
            aria-label="Next case"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swipeable Track */}
      <div ref={trackRef} className="ios-carousel-track success-slider-track">
        {successCases.map((sc, i) => (
          <div key={i} className="ios-carousel-card success-case-card">
            {/* Top row: Company Logo & Level badge */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {sc.logo}
              </div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "var(--body-muted)",
                  background: "var(--bg-subtle)",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                }}
              >
                Level: {sc.level}
              </span>
            </div>

            {/* Role Title */}
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--headline)", margin: "0 0 12px" }}>
              {sc.role}
            </h4>

            {/* Middle Stats Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "#D1FAE5",
                  color: "#065F46",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                <TrendingUp size={14} /> {sc.hike}
              </span>

              <span className="badge badge-teal" style={{ fontSize: "0.78rem" }}>
                ✓ {sc.outcome}
              </span>
            </div>

            {/* Bottom meta row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "12px",
                borderTop: "1px dashed var(--border)",
                fontSize: "0.8rem",
                color: "var(--body-muted)",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <Clock size={13} /> Prep: {sc.prepTime}
              </span>
              <span style={{ fontWeight: 600, color: "var(--primary-dark)" }}>Verified Placement</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. 100,000+ SUCCESS STORIES (TESTIMONIALS SLIDER)
export function TestimonialsSlider({ testimonials }) {
  const { trackRef, canScrollLeft, canScrollRight, activeIndex, scroll, scrollTo } = useCarousel(testimonials.length);

  return (
    <div className="ios-carousel-wrapper">
      {/* Carousel Controls Header */}
      <div className="ios-carousel-header">
        <div className="ios-carousel-pagination">
          <span className="ios-carousel-counter">
            <strong>0{activeIndex + 1}</strong> / 0{testimonials.length} Stories
          </span>
          <div className="ios-carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={`ios-carousel-dot ${activeIndex === i ? "active" : ""}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="ios-carousel-arrows">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="ios-carousel-btn"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="ios-carousel-btn"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swipeable Track */}
      <div ref={trackRef} className="ios-carousel-track testimonials-slider-track">
        {testimonials.map((t, i) => (
          <div key={i} className="ios-carousel-card testimonial-slider-item">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div className="review-stars" style={{ color: "#F59E0B", fontSize: "0.95rem" }}>
                  {"★".repeat(t.rating)}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--primary-dark)",
                    background: "var(--primary-light)",
                    padding: "3px 8px",
                    borderRadius: "6px",
                  }}
                >
                  {t.source}
                </span>
              </div>
              <p className="review-text" style={{ fontSize: "0.95rem", lineHeight: "1.65", color: "var(--headline)" }}>
                “{t.text}”
              </p>
            </div>

            <div className="review-author" style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
              <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--headline)" }}>
                {t.name}
              </strong>
              <span style={{ fontSize: "0.82rem", color: "var(--body-muted)" }}>
                {t.role} · {t.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
