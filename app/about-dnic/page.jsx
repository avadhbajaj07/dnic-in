import Link from "next/link";
import { site } from "../../lib/site";
import {
  BookOpen,
  Video,
  FileText,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { YouTubeIcon, LinkedInIcon, InstagramIcon, FacebookIcon, AmazonIcon } from "../../components/Icons";

export const metadata = {
  title: "About DNIC | Dot Net Interview Community",
  description:
    "Learn about Dot Net Interview Community (DNIC) — an educational platform providing practical interview books, YouTube tutorials, and resume guidance for software developers and QA testers.",
};

export default function AboutDNICPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">DOT NET INTERVIEW COMMUNITY</span>
          <h1>Learn Smart. Interview Better. Grow Faster.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            DNIC began with one simple idea: most developers don’t fail interviews because they lack skill. They fail because nobody showed them what interviewers actually ask, or how to explain what they know.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section">
        <div className="shell founder-split">
          <div>
            <span className="eyebrow">OUR STORY & PURPOSE</span>
            <h2>Skip the jargon. Focus on what interviewers actually ask.</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--body)" }}>
              Dot Net Interview Community is a learning platform for developers and testers preparing for real technical interviews. We write clear, practical books that skip the jargon and focus on the questions that come up again and again, with answers you can understand and repeat in your own words.
            </p>
            <p style={{ fontSize: "1.02rem", lineHeight: "1.75", color: "var(--body)" }}>
              DNIC was started by author <strong>Nirbhay Chauhan</strong> to help job seekers prepare better. What began as an informal community sharing interview experiences has grown into a published library of 8 books, a personalized resume writing service, and a growing community across YouTube, LinkedIn, Instagram, and Facebook.
            </p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/about-nirbhay-chauhan/" className="button button-secondary">
                Meet Founder Nirbhay Chauhan <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Visual Community Infographic & Mission Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
              <img
                src="/images/infographics/community-dnic.jpeg"
                alt="Dot Net Interview Community Infographic"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="eager"
              />
            </div>
            <div style={{ padding: "28px 32px" }}>
              <span className="badge badge-teal" style={{ marginBottom: "12px" }}>
                OUR MISSION
              </span>
              <h3 style={{ fontSize: "1.25rem", lineHeight: "1.4", marginBottom: "12px", color: "var(--headline)" }}>
                “To make quality technical interview preparation affordable, structured, and understandable for every developer and tester, in every city.”
              </h3>
              <p style={{ color: "var(--body)", fontSize: "0.92rem", lineHeight: "1.6", margin: 0 }}>
                We believe technical confidence grows through clear fundamentals, thoughtful practice, and a commitment to keeping your knowledge current.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer (4 Cards) */}
      <section className="section section-subtle">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Comprehensive Resources for Technical Candidates.</h2>
            <p>From structured reading to ATS-optimized resumes and weekly video breakdowns.</p>
          </div>

          <div className="features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ backgroundColor: "var(--card-mint)" }}>
                <BookOpen size={24} color="var(--primary)" />
              </div>
              <h3>Interview Books</h3>
              <p>
                Six titles for software developers and two for QA testing, available as instant e-books and printed hardcovers delivered to your door.
              </p>
              <Link href="/books/" className="text-link">Explore books ↗</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ backgroundColor: "var(--card-lavender)" }}>
                <FileText size={24} color="#7C3AED" />
              </div>
              <h3>Resume Writing</h3>
              <p>
                Professional resumes written to pass applicant tracking systems (ATS) and highlight your true technical impact to hiring managers.
              </p>
              <Link href="/resume-writing/" className="text-link">View packages ↗</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ backgroundColor: "var(--card-blue)" }}>
                <Video size={24} color="#2563EB" />
              </div>
              <h3>Learning Hub</h3>
              <p>
                Free tips, guides, and weekly video tutorials breaking down complex .NET, C#, and QA interview questions.
              </p>
              <Link href="/learning-hub/" className="text-link">Visit hub ↗</Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper" style={{ backgroundColor: "var(--card-peach)" }}>
                <Users size={24} color="#D97706" />
              </div>
              <h3>Community</h3>
              <p>
                A collaborative space to ask technical questions, read interview experiences, and prepare alongside fellow job seekers.
              </p>
              <Link href="/community/" className="text-link">Join community ↗</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Readers Choose DNIC */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">THE DNIC PRINCIPLES</span>
            <h2>Why Readers Choose DNIC.</h2>
            <p>Designed around the actual dynamics of contemporary hiring rounds.</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-card-number">01</span>
              <h3>Plain Language</h3>
              <p>Concepts explained simply, with no unnecessary academic jargon or convoluted proofs.</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">02</span>
              <h3>Interview-Focused</h3>
              <p>Everything is built around questions and problem scenarios asked in real, contemporary technical interviews.</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">03</span>
              <h3>Beginner to Advanced</h3>
              <p>Each book builds logically from core runtime fundamentals to senior-level architectural concepts.</p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">04</span>
              <h3>Real Author, Real Support</h3>
              <p>You can directly reach the person who wrote the book and designed the learning curriculum.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect & Follow Us */}
      <section className="section section-mint">
        <div className="shell" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">STAY CONNECTED</span>
          <h2>Connect With Our Community Across Platforms.</h2>
          <p style={{ marginBottom: "32px" }}>
            Follow our educational channels for daily tips, video tutorials, and book release announcements.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              <YouTubeIcon size={18} /> YouTube Channel
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              <LinkedInIcon size={18} /> LinkedIn Network
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              <InstagramIcon size={18} /> Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              <FacebookIcon size={18} /> Facebook
            </a>
            <a href={site.amazonAuthor} target="_blank" rel="noopener noreferrer" className="button button-primary">
              <AmazonIcon size={18} /> Amazon Author Store
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
