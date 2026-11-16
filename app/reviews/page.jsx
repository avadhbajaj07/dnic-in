import { site } from "../../lib/site";
import Link from "next/link";
import { Star, ExternalLink, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Reviews & Reader Stories | Dot Net Interview Community",
  description:
    "Read genuine reviews and feedback from readers of Nirbhay Chauhan's Dot Net Interview Preparation books and resume writing clients.",
};

const reviews = [
  {
    name: "Rohan Verma",
    role: "Senior .NET Developer",
    city: "Bengaluru",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "Master C# Interview Preparation was instrumental in my technical rounds at a major product company. Concepts like TPL, async internals, and memory allocations are explained exactly as asked in senior interviews.",
  },
  {
    name: "Pooja Sharma",
    role: "QA Automation Engineer",
    city: "Pune",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "The QA interview handbook gives you clear frameworks to explain test design strategies on the spot. Highly recommended for automation testers moving into SDET roles.",
  },
  {
    name: "Amitabh Sen",
    role: "Full-Stack Engineer",
    city: "Hyderabad",
    rating: 5,
    source: "LinkedIn Reader Feedback",
    text: "I loved that the books skip unnecessary academic fluff. Every single page is focused on questions interviewers actually ask and the exact rationale behind the answers.",
  },
  {
    name: "Sneha Nair",
    role: "Entry-Level .NET Developer",
    city: "Chennai",
    rating: 5,
    source: "Resume Writing Client",
    text: "The Career Starter resume package completely restructured my resume. Highlighting my practical college projects properly got me 3 interview shortlists within two weeks.",
  },
  {
    name: "Vikas Patil",
    role: "Cloud / Azure Engineer",
    city: "Mumbai",
    rating: 5,
    source: "YouTube Community Member",
    text: "Conquer the Azure Developer Interview clarified messaging architectures and managed identities with sheer simplicity. Nirbhay's coaching style is top-notch.",
  },
  {
    name: "Karan Malhotra",
    role: "Technical Lead",
    city: "Noida / Delhi NCR",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "Mastering the .NET Core Interview covers the exact middleware and EF Core query bottlenecks that we evaluate candidates on. A must-read before your next switch.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">
            <ShieldCheck size={14} /> READER FEEDBACK
          </span>
          <h1>What Readers Say.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Genuine feedback from software engineers, QA professionals, and candidates who used DNIC books and resume services to crack their technical interviews.
          </p>

          <div style={{ marginTop: "24px" }}>
            <span className="review-badge-amazon" style={{ margin: 0 }}>
              ★ ★ ★ ★ ★ Rated 4.8 / 5 on Amazon · Verified Reviews
            </span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="shell">
          <div className="reviews-grid">
            {reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div>
                  <div className="review-stars">{"★".repeat(r.rating)}</div>
                  <p className="review-text">“{r.text}”</p>
                </div>
                <div className="review-author">
                  <strong>{r.name}</strong>
                  <span>{r.role} · {r.city}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--primary)", marginTop: "4px" }}>
                    {r.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              Read More Reviews on Amazon <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Cross-Link */}
      <section className="section section-subtle">
        <div className="shell" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>
            Ready to Begin Your Technical Preparation?
          </h2>
          <p style={{ color: "var(--body)", marginBottom: "28px" }}>
            Explore our 8 interview books or get an ATS-optimized resume crafted for your target role.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/books/" className="button button-primary">
              Browse All Books <ArrowRight size={16} />
            </Link>
            <Link href="/resume-writing/get-started/" className="button button-secondary">
              Find Your Resume Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
