import BookCatalog from "../../components/BookCatalog";
import { books } from "../../lib/books";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Interview Preparation Books | Dot Net Interview Community",
  description:
    "Explore eight published technical interview books by Nirbhay Chauhan covering .NET runtime, C# async/await, ASP.NET Core, Azure cloud, and software QA testing.",
};

export default function BooksPage() {
  return (
    <>
      {/* Books Header */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <span className="eyebrow">
            <BookOpen size={14} /> THE COMPLETE INTERVIEW LIBRARY
          </span>
          <h1>Books That Help You Prepare With Confidence.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Choose your format: instant high-resolution e-book PDF download, or a hardcover delivered to your door. Every book is written to help you walk into the technical interview room prepared.
          </p>

          {/* Fanned Stack of Developer Interview Books (Transparent Mockup) */}
          <div style={{ maxWidth: "680px", margin: "28px auto 0" }}>
            <img
              src="/images/mockups/fanned-developer-books-transparent.png"
              alt="Fanned Stack of Developer Interview Books by Nirbhay Chauhan"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "340px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.14))",
              }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Technical Interview Roadmap Infographic */}
      <section className="section" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="shell">
          <div
            style={{
              maxWidth: "840px",
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
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--body-muted)", marginLeft: "8px" }}>
                  DNIC Technical Interview Roadmap
                </span>
              </div>
              <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>
                8-Book Curriculum
              </span>
            </div>
            <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
              <img
                src="/images/infographics/interview-roadmap.jpeg"
                alt="Technical Interview Roadmap Infographic"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog with Interactive Filters */}
      <section className="section">
        <div className="shell">
          <BookCatalog books={books} />
        </div>
      </section>

      {/* Paired Resume Service CTA Banner */}
      <section className="section section-subtle">
        <div className="shell">
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "48px 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "28px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div>
              <span className="badge badge-teal" style={{ marginBottom: "8px" }}>
                PAIRED CAREER SERVICE
              </span>
              <h2 style={{ fontSize: "1.8rem", margin: "4px 0 8px" }}>
                Need an ATS-Ready Technical Resume?
              </h2>
              <p style={{ color: "var(--body)", maxWidth: "560px", margin: 0 }}>
                A great book prepares your answers; an ATS-optimized resume secures the interview room. Work directly with Nirbhay Chauhan to tailor your profile for your target role.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/resume-writing/get-started/" className="button button-primary">
                Build My Resume <ArrowRight size={16} />
              </Link>
              <Link href="/resume-writing/" className="button button-secondary">
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
