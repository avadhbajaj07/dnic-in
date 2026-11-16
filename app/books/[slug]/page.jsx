import Link from "next/link";
import { notFound } from "next/navigation";
import { books, getBook } from "../../../lib/books";
import BookCard from "../../../components/BookCard";
import { site } from "../../../lib/site";
import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Video,
  Download,
  Package,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const b = getBook(slug);
  if (!b) return {};

  return {
    title: `${b.title} | Dot Net Interview Books`,
    description: b.summary,
    openGraph: {
      title: `${b.title} — Nirbhay Chauhan`,
      description: b.summary,
      type: "book",
    },
  };
}

export default async function BookDetailPage({ params }) {
  const { slug } = await params;
  const b = getBook(slug);
  if (!b) notFound();

  const related = books
    .filter((x) => x.slug !== slug && x.category === b.category)
    .slice(0, 3);

  const amazonUrl = b.amazonUrl || site.amazonAuthor;

  // JSON-LD Book Schema
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: b.title,
    author: {
      "@type": "Person",
      name: site.author,
      url: site.amazonAuthor,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: "https://dnic.in",
    },
    description: b.summary,
    inLanguage: "en",
    bookFormat: "https://schema.org/EBook",
    offers: [
      {
        "@type": "Offer",
        price: b.ebookPrice,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* Breadcrumb Header */}
      <div style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
        <div className="shell" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--body-muted)" }}>
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <Link href="/books/">Books</Link>
          <ChevronRight size={14} />
          <Link href={b.category === "developer" ? "/developer-interview-books/" : "/qa-interview-books/"}>
            {b.categoryLabel}
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: "var(--headline)", fontWeight: 600 }}>{b.title}</span>
        </div>
      </div>

      {/* Book Detail Hero Grid */}
      <section className="section">
        <div className="shell book-detail-grid">
          {/* Left Column: Authentic 3D Book Cover & Purchasing Card */}
          <div>
            <div
              style={{
                background: b.cardBg || "#F8FAFC",
                borderRadius: "var(--radius-xl)",
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
                marginBottom: "24px",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(17, 24, 39, 0.85)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(4px)",
                }}
              >
                {b.label}
              </span>

              <img
                src={b.coverImageTight || b.coverImage}
                alt={b.title}
                style={{
                  maxHeight: "400px",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                  display: "block",
                  filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.2))",
                }}
                loading="eager"
              />

              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Official Publication · {b.author || "Nirbhay Chauhan"}
                </span>
              </div>
            </div>

            {/* Formats & Pricing Box */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                <div style={{ background: "var(--primary-light)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-teal)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", fontWeight: 700, color: "var(--primary-dark)", textTransform: "uppercase" }}>
                    <Download size={14} /> E-book (PDF)
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--headline)", margin: "4px 0" }}>
                    ₹{b.ebookPrice}
                  </div>
                  <small style={{ color: "var(--body-muted)", fontSize: "0.75rem" }}>Instant email delivery</small>
                </div>

                <div style={{ background: "var(--card-peach)", padding: "14px", borderRadius: "var(--radius-md)", border: "1px solid #FED7AA" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.75rem", fontWeight: 700, color: "#9A3412", textTransform: "uppercase" }}>
                    <Package size={14} /> Hardcover Print
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--headline)", margin: "4px 0" }}>
                    ₹{b.hardcoverPrice}
                  </div>
                  <small style={{ color: "var(--body-muted)", fontSize: "0.75rem" }}>Ships in 2 days</small>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                  style={{ width: "100%" }}
                >
                  Buy on Amazon Store <ExternalLink size={16} />
                </a>

                <Link
                  href="/contact/"
                  className="button button-secondary"
                  style={{ width: "100%" }}
                >
                  Order Direct Digital Copy
                </Link>
              </div>

              <p style={{ fontSize: "0.8rem", color: "var(--body-muted)", margin: "16px 0 0", textAlign: "center" }}>
                ✓ E-book delivered instantly · Hardcover dispatched across India
              </p>
            </div>
          </div>

          {/* Right Column: Book Details & Curriculum */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span className="badge badge-teal">{b.categoryLabel}</span>
              <span style={{ fontSize: "0.85rem", color: "var(--body-muted)", fontWeight: 600 }}>
                {b.label} · NIRBHAY CHAUHAN
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "16px" }}>
              {b.title}
            </h1>

            <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151", marginBottom: "28px" }}>
              {b.summary}
            </p>

            {/* Who is it for */}
            <div style={{ marginBottom: "28px" }}>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)" }}></span>
                Who this book is for
              </h3>
              <p style={{ color: "var(--body)", lineHeight: "1.65" }}>
                {b.whoIsItFor}
              </p>
            </div>

            {/* What's inside */}
            <div style={{ marginBottom: "32px", background: "var(--bg-subtle)", padding: "28px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
                What’s inside this edition
              </h3>
              <ul className="checklist">
                {b.whatsInside.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
                What you will be able to do in interviews
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
                {b.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", background: "#FFFFFF", border: "1px solid var(--border)", padding: "14px 18px", borderRadius: "var(--radius-md)" }}>
                    <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.92rem", color: "var(--headline)" }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant YouTube Lessons */}
            {b.relevantVideos && b.relevantVideos.length > 0 && (
              <div style={{ marginBottom: "36px" }}>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Video size={18} color="var(--primary)" /> Relevant Video Lessons
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {b.relevantVideos.map((v, i) => (
                    <a
                      key={i}
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "12px 18px",
                        background: "var(--primary-lighter)",
                        border: "1px solid var(--border-teal)",
                        borderRadius: "var(--radius-md)",
                        color: "var(--headline)",
                      }}
                    >
                      <span style={{ fontWeight: 600, fontSize: "0.92rem" }}>▶ {v.title}</span>
                      <span style={{ fontSize: "0.78rem", color: "var(--primary-dark)", fontWeight: 700 }}>
                        {v.duration} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Books */}
      <section className="section section-mint">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">CONTINUE PREPARING</span>
            <h2>More Books in the {b.categoryLabel} Series.</h2>
            <p>Expand your interview readiness across surrounding architectural topics.</p>
          </div>

          <div className="books-grid" style={{ gridTemplateColumns: `repeat(${Math.min(related.length, 3)}, 1fr)` }}>
            {related.map((relBook) => (
              <BookCard key={relBook.slug} book={relBook} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/books/" className="button button-secondary">
              View All 8 Published Books <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
