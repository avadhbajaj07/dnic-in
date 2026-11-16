import Link from "next/link";
import { site } from "../lib/site";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";

export default function BookCard({ book }) {
  const amazonTarget = book.amazonUrl || site.amazonAuthor;

  return (
    <article className="book-card">
      {/* Authentic 3D Book Cover Display */}
      <Link
        href={`/books/${book.slug}/`}
        className="book-cover-container"
        style={{
          background: book.cardBg || "#F9FAFB",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          textDecoration: "none",
          minHeight: "280px",
        }}
        aria-label={`View details for ${book.title}`}
      >
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            fontSize: "0.68rem",
            fontWeight: 800,
            padding: "3px 8px",
            borderRadius: "6px",
            backgroundColor: "rgba(17, 24, 39, 0.85)",
            color: "#FFFFFF",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          {book.label.split("/")[0].trim()}
        </span>

        <img
          src={book.coverImageTight || book.coverImage}
          alt={book.title}
          style={{
            maxHeight: "250px",
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.15))",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="book-cover-img"
          loading="lazy"
        />
      </Link>

      {/* Book Card Information */}
      <div className="book-card-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <span className="book-card-category">{book.categoryLabel}</span>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary-dark)" }}>
            ₹{book.ebookPrice} e-book
          </span>
        </div>

        <h3 className="book-card-title">
          <Link href={`/books/${book.slug}/`}>{book.title}</Link>
        </h3>

        <p className="book-card-desc">{book.summary}</p>

        {/* Dual Actions */}
        <div className="book-card-actions">
          <Link href={`/books/${book.slug}/`} className="button button-secondary button-sm">
            View Details
          </Link>
          <a
            href={amazonTarget}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary button-sm"
          >
            Amazon <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
