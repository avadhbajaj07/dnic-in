"use client";

import { useState } from "react";
import BookCard from "./BookCard";
import { BookMarked, Code2, CheckCircle2, Download, Package } from "lucide-react";

export default function BookCatalog({ books }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = books.filter((b) => {
    if (activeTab === "developer") return b.category === "developer";
    if (activeTab === "qa") return b.category === "qa";
    return true;
  });

  return (
    <div>
      {/* Category Filter Tabs */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "36px",
          justifyContent: "center",
        }}
        role="tablist"
      >
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`button button-sm ${activeTab === "all" ? "button-primary" : "button-secondary"}`}
          style={{ borderRadius: "9999px" }}
        >
          <BookMarked size={16} /> All Books ({books.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("developer")}
          className={`button button-sm ${activeTab === "developer" ? "button-primary" : "button-secondary"}`}
          style={{ borderRadius: "9999px" }}
        >
          <Code2 size={16} /> Developer Interviews (6)
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("qa")}
          className={`button button-sm ${activeTab === "qa" ? "button-primary" : "button-secondary"}`}
          style={{ borderRadius: "9999px" }}
        >
          <CheckCircle2 size={16} /> QA & Testing (2)
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ebook")}
          className={`button button-sm ${activeTab === "ebook" ? "button-primary" : "button-secondary"}`}
          style={{ borderRadius: "9999px" }}
        >
          <Download size={16} /> Instant E-book PDF
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("hardcover")}
          className={`button button-sm ${activeTab === "hardcover" ? "button-primary" : "button-secondary"}`}
          style={{ borderRadius: "9999px" }}
        >
          <Package size={16} /> Hardcover Print
        </button>
      </div>

      {activeTab === "ebook" && (
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto 32px",
            background: "var(--primary-light)",
            border: "1px solid var(--border-teal)",
            borderRadius: "var(--radius-md)",
            padding: "16px 20px",
            textAlign: "center",
            fontSize: "0.92rem",
            color: "var(--primary-dark)",
          }}
        >
          ⚡ <strong>Instant E-book Delivery:</strong> High-resolution, multi-device compatible PDF download is emailed immediately after purchase.
        </div>
      )}

      {activeTab === "hardcover" && (
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto 32px",
            background: "var(--card-peach)",
            border: "1px solid #FED7AA",
            borderRadius: "var(--radius-md)",
            padding: "16px 20px",
            textAlign: "center",
            fontSize: "0.92rem",
            color: "#9A3412",
          }}
        >
          📦 <strong>Hardcover Print Editions:</strong> Dispatched in 2 working days. High-grade print binding delivered anywhere in India within 3–5 working days.
        </div>
      )}

      {/* Grid */}
      <div className="books-grid">
        {filtered.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </div>
  );
}
