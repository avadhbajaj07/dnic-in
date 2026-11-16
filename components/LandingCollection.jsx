import BookCard from "./BookCard";
import { books } from "../lib/books";
import { site } from "../lib/site";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ExternalLink, ArrowRight, BookOpen, Star, Sparkles } from "lucide-react";

export default function LandingCollection({
  category,
  eyebrow,
  title,
  subtitle,
  countText,
  infographic,
}) {
  const chosen = books.filter((b) => b.category === category);

  return (
    <>
      {/* Campaign Hero Banner */}
      <section className="section section-mint" style={{ padding: "64px 0 52px" }}>
        <div className="shell" style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto" }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)", marginBottom: "16px" }}>
            {title}
          </h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151", marginBottom: "28px" }}>
            {subtitle}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              fontSize: "0.88rem",
              color: "var(--primary-dark)",
              fontWeight: 600,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} /> {countText}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} /> Instant E-book PDF
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} /> Delivered Across India
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} /> Official Amazon Store
            </span>
          </div>
        </div>
      </section>

      {/* Featured Infographic Roadmap / Architecture if provided */}
      {infographic && (
        <section className="section" style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          <div className="shell">
            <div
              style={{
                maxWidth: "1000px",
                margin: "0 auto",
                background: "#FFFFFF",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  background: "var(--bg-subtle)",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#EF4444",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#F59E0B",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#10B981",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--body-muted)", marginLeft: "8px" }}>
                    {infographic.badge || "Visual Curriculum & Topic Map"}
                  </span>
                </div>
                <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>
                  Curriculum Architecture
                </span>
              </div>
              <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
                <img
                  src={infographic.src}
                  alt={infographic.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  loading="eager"
                />
              </div>
              {infographic.caption && (
                <div
                  style={{
                    padding: "14px 24px",
                    background: "#FFFFFF",
                    borderTop: "1px solid var(--border)",
                    fontSize: "0.88rem",
                    color: "var(--body-muted)",
                    textAlign: "center",
                  }}
                >
                  {infographic.caption}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Book Grid */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">FEATURED VOLUMES</span>
            <h2>{category === "developer" ? "Software Engineering & Architecture Volumes" : "Quality Assurance & SDET Volumes"}</h2>
            <p>Select any volume to inspect detailed table of contents, sample questions, and purchase links.</p>
          </div>
          <div className="books-grid">
            {chosen.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="section section-subtle" style={{ padding: "52px 0" }}>
        <div className="shell" style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <div className="review-badge-amazon" style={{ margin: "0 auto 16px" }}>
            ★ ★ ★ ★ ★ Rated 4.8/5 on Amazon · Verified Reader Reviews
          </div>
          <h3 style={{ fontSize: "1.45rem", marginBottom: "10px" }}>
            Written by Nirbhay Chauhan — Dot Net Interview Community
          </h3>
          <p style={{ color: "var(--body)", lineHeight: "1.65", marginBottom: "24px" }}>
            Every title in the series is constructed around questions real hiring managers ask in technical screening, system design, and coding rounds. Zero academic fluff, 100% practical clarity.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Browse All Titles on Amazon <ExternalLink size={16} />
            </a>
            <Link href="/resume-writing/get-started/" className="button button-secondary">
              Get an ATS Resume Done
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
