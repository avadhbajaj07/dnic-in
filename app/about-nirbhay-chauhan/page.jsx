import Link from "next/link";
import { books } from "../../lib/books";
import { site } from "../../lib/site";
import { ExternalLink, BookOpen, Video, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Nirbhay Chauhan | Author & Interview Coach",
  description:
    "Learn about Nirbhay Chauhan, founder of Dot Net Interview Community (DNIC) and author of the Dot Net Interview Preparation series.",
};

export default function AboutNirbhayPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <span className="eyebrow">FOUNDER & AUTHOR</span>
          <h1>Nirbhay Chauhan</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Author · Interview Coach · Founder, Dot Net Interview Community
          </p>
        </div>
      </section>

      {/* Split Bio Section */}
      <section className="section">
        <div className="shell founder-split">
          {/* Portrait Placeholder Card */}
          <div className="founder-portrait-card">
            <div className="founder-avatar-wrap">NC</div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "4px" }}>Nirbhay Chauhan</h3>
            <span style={{ color: "var(--primary-dark)", fontWeight: 700, fontSize: "0.9rem" }}>
              Author & Interview Coach
            </span>
            <div className="founder-credentials" style={{ marginTop: "12px", marginBottom: "20px" }}>
              <span className="badge badge-teal">8 Published Books</span>
              <span className="badge badge-blue">.NET & Cloud Expert</span>
              <span className="badge badge-amber">SDET & QA Mentor</span>
            </div>

            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
              style={{ width: "100%" }}
            >
              View All Books on Amazon <ExternalLink size={15} />
            </a>
          </div>

          {/* Bio Text */}
          <div>
            <span className="eyebrow">BIOGRAPHY & WRITING PHILOSOPHY</span>
            <h2>Explain the concept. Show the answer. Tell you how to say it.</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "#374151" }}>
              Nirbhay Chauhan writes the Dot Net Interview Preparation series, covering C#, .NET, .NET Core and Azure, along with books on QA and software testing. His writing style is simple: explain the concept, show the answer, and tell you how to say it in an interview.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.75", color: "var(--body)" }}>
              Throughout his software engineering career, Nirbhay observed that technical candidates frequently struggle not from a deficiency in coding capability, but from an inability to structure their verbal answers around the mental models and architectural trade-offs that interviewers look for.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.75", color: "var(--body)" }}>
              He established Dot Net Interview Community to democratize technical interview preparation, providing focused books, practical YouTube tutorials, and hands-on resume writing consultations.
            </p>

            <div style={{ display: "flex", gap: "14px", marginTop: "28px", flexWrap: "wrap" }}>
              <Link href="/books/" className="button button-secondary">
                Explore His 8 Books <ArrowRight size={16} />
              </Link>
              <Link href="/resume-writing/" className="button button-secondary">
                Resume Writing Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Published Library Catalog */}
      <section className="section section-subtle">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">PUBLISHED WORKS</span>
            <h2>The Dot Net Interview Preparation Series.</h2>
            <p>Eight focused titles designed for every phase of technical hiring.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {books.map((b) => (
              <Link
                key={b.slug}
                href={`/books/${b.slug}/`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.2s ease",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase" }}>
                    {b.label}
                  </span>
                  <h4 style={{ fontSize: "1.05rem", margin: "4px 0 0", color: "var(--headline)" }}>{b.title}</h4>
                </div>
                <ArrowRight size={18} color="var(--primary)" />
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit Nirbhay Chauhan's Amazon Author Store ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
