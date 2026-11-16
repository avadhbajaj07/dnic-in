import Link from "next/link";
import BookCard from "../components/BookCard";
import HeroSlider from "../components/HeroSlider";
import { books } from "../lib/books";
import { site, packages, money } from "../lib/site";
import {
  BookOpen,
  Video,
  FileText,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  Users,
  Clock,
  Sparkles,
  ChevronDown,
  Award,
  Globe,
  Building2,
  Briefcase,
  Layers,
} from "lucide-react";
import {
  YouTubeIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  AmazonIcon,
  MicrosoftLogo,
  GoogleLogo,
  AmazonLogo,
  CognizantLogo,
  AccentureLogo,
  InfosysLogo,
  TCSLogo,
} from "../components/Icons";

export const metadata = {
  title: "DNIC — Dot Net Interview Community | .NET, C# & Azure Books",
  description:
    "Ace every stage of your next technical interview. Discover expert-written interview preparation books, visual architecture lessons, and career-advancing resume services by Nirbhay Chauhan.",
};

const successCases = [
  {
    company: "Microsoft",
    logo: <MicrosoftLogo height={18} />,
    color: "#00A4EF",
    role: "Senior .NET Software Engineer",
    level: "L63",
    outcome: "Offer Accepted",
    hike: "+45% Hike",
    prepTime: "3 weeks",
  },
  {
    company: "Amazon",
    logo: <AmazonLogo height={18} />,
    color: "#FF9900",
    role: "SDE II — Cloud & Services",
    level: "L5",
    outcome: "Offer Accepted",
    hike: "+50% Hike",
    prepTime: "4 weeks",
  },
  {
    company: "Google",
    logo: <GoogleLogo height={18} />,
    color: "#4285F4",
    role: "Full-Stack Engineer (Cloud)",
    level: "L4 / L5",
    outcome: "Offer Accepted",
    hike: "+48% Hike",
    prepTime: "4 weeks",
  },
  {
    company: "Cognizant",
    logo: <CognizantLogo height={17} />,
    color: "#0033A0",
    role: "Technical Lead (.NET Core)",
    level: "Lead",
    outcome: "Promoted to Lead",
    hike: "Internal Advance",
    prepTime: "2 weeks",
  },
  {
    company: "Infosys",
    logo: <InfosysLogo height={18} />,
    color: "#007CC3",
    role: "Senior SDET Automation",
    level: "Senior",
    outcome: "Offer Accepted",
    hike: "+40% Hike",
    prepTime: "3 weeks",
  },
  {
    company: "Accenture",
    logo: <AccentureLogo height={17} />,
    color: "#A100FF",
    role: "Azure Cloud Architect",
    level: "Manager",
    outcome: "Offer Accepted",
    hike: "+55% Hike",
    prepTime: "4 weeks",
  },
  {
    company: "TCS",
    logo: <TCSLogo height={18} />,
    color: "#0A2540",
    role: "Full-Stack C# Developer",
    level: "C3X",
    outcome: "Offer Accepted",
    hike: "+38% Hike",
    prepTime: "2 weeks",
  },
];

const engineers = [
  {
    name: "Vikram Malhotra",
    role: "Senior .NET Core Architect",
    company: "Microsoft",
    logo: <MicrosoftLogo height={17} />,
    bg: "#EDE9FE",
    accent: "#6D28D9",
    avatar: "VM",
  },
  {
    name: "Sneha Sundaram",
    role: "Lead SDET Automation",
    company: "Amazon",
    logo: <AmazonLogo height={17} />,
    bg: "#FEF3C7",
    accent: "#B45309",
    avatar: "SS",
  },
  {
    name: "Arjun Reddy",
    role: "Full Stack Engineer",
    company: "Google",
    logo: <GoogleLogo height={17} />,
    bg: "#D1FAE5",
    accent: "#065F46",
    avatar: "AR",
  },
  {
    name: "Pooja Sharma",
    role: "QA Automation Lead",
    company: "Cognizant",
    logo: <CognizantLogo height={16} />,
    bg: "#DBEAFE",
    accent: "#1E40AF",
    avatar: "PS",
  },
  {
    name: "Karan Johar",
    role: "Azure DevOps Specialist",
    company: "Accenture",
    logo: <AccentureLogo height={16} />,
    bg: "#FEE2E2",
    accent: "#991B1B",
    avatar: "KJ",
  },
  {
    name: "Rohan Verma",
    role: "Principal .NET Engineer",
    company: "Infosys",
    logo: <InfosysLogo height={17} />,
    bg: "#E0E7FF",
    accent: "#3730A3",
    avatar: "RV",
  },
];

const testimonials = [
  {
    name: "Rohan Verma",
    role: "Senior .NET Developer",
    city: "Bengaluru",
    company: "Product Tech",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "Master C# Interview Preparation was instrumental in my technical rounds at a major product company. Concepts like TPL, async internals, and memory allocations are explained exactly as asked in senior interviews.",
  },
  {
    name: "Pooja Sharma",
    role: "QA Automation Engineer",
    city: "Pune",
    company: "Global IT Services",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "The QA interview handbook gives you clear frameworks to explain test design strategies on the spot. Highly recommended for automation testers moving into SDET roles.",
  },
  {
    name: "Amitabh Sen",
    role: "Full-Stack Engineer",
    city: "Hyderabad",
    company: "Enterprise SaaS",
    rating: 5,
    source: "LinkedIn Reader Feedback",
    text: "I loved that the books skip unnecessary academic fluff. Every single page is focused on questions interviewers actually ask and the exact rationale behind the answers.",
  },
  {
    name: "Sneha Nair",
    role: "Entry-Level .NET Developer",
    city: "Chennai",
    company: "FinTech Startup",
    rating: 5,
    source: "Resume Writing Client",
    text: "The Career Starter resume package completely restructured my resume. Highlighting my practical college projects properly got me 3 interview shortlists within two weeks.",
  },
  {
    name: "Vikas Patil",
    role: "Cloud / Azure Engineer",
    city: "Mumbai",
    company: "Cloud Consulting",
    rating: 5,
    source: "YouTube Community Member",
    text: "Conquer the Azure Developer Interview clarified messaging architectures and managed identities with sheer simplicity. Nirbhay's coaching style is top-notch.",
  },
  {
    name: "Karan Malhotra",
    role: "Technical Lead",
    city: "Noida / Delhi NCR",
    company: "Tier-1 Software",
    rating: 5,
    source: "Verified Amazon Purchase",
    text: "Mastering the .NET Core Interview covers the exact middleware and EF Core query bottlenecks that we evaluate candidates on. A must-read before your next switch.",
  },
];

const faqs = [
  {
    q: "Are the interview books text-based or video-based?",
    a: "Every book is a comprehensive, publication-grade technical guide available as an instant downloadable PDF and printed hardcover. They are complemented by weekly video tutorials and visual breakdowns on the Dot Net Interview Community YouTube channel.",
  },
  {
    q: "How do I purchase the books?",
    a: "Every DNIC book can be purchased directly via Amazon (for physical paperbacks, Kindle, and hardcovers) or ordered as an instant high-resolution digital e-book PDF directly on our website.",
  },
  {
    q: "How does the resume writing service work?",
    a: "Take our short 6-step assessment questionnaire to determine your ideal package (Career Starter ₹1,000, Career Growth ₹2,000, or Career Leadership ₹3,000). You'll receive an automated confirmation email with payment instructions and document checklist. Nirbhay then reviews your profile and crafts your customized ATS-friendly resume within 2–3 working days.",
  },
  {
    q: "Do you ship hardcover books across India?",
    a: "Yes. We ship hardcover print editions across all serviceable pin codes in India. Dispatches occur within 2 working days, and delivery usually takes 3–5 working days.",
  },
  {
    q: "Which book should I start with?",
    a: "Beginners and early-career developers should start with 'Master .NET Fundamentals' and 'Master C# Interview Preparation'. For backend and cloud positions, choose 'Mastering the .NET Core Interview' and 'Conquer the Azure Developer Interview'. For testing careers, begin with 'Software Testing Interview Secrets'.",
  },
  {
    q: "Is payment secure?",
    a: "Yes. All digital book payments and authorized resume UPI payments are processed through secure, 256-bit encrypted systems. We never store credit/debit card numbers or sensitive banking data.",
  },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1: VIBRANT GREEN HERO WITH CONTINUOUS HORIZONTAL SLIDER */}
      <section className="hero-bytebytego">
        <div className="shell">
          <h1>
            Ace <span className="hero-highlight-yellow">Every Stage</span> of Your<br />
            Next Technical Interview
          </h1>

          <p className="hero-lead-white">
            Practical interview preparation books, visual architecture lessons, and career-advancing resume services by Nirbhay Chauhan.
          </p>

          <div style={{ marginBottom: "28px" }}>
            <Link href="/books/" className="hero-pill-btn-black">
              Get All-Access Books ↗
            </Link>
          </div>
        </div>

        {/* The Horizontal Continuous Slider / Carousel with Real Graphic Cards */}
        <HeroSlider />
      </section>

      {/* SECTION 2: SOCIAL PROOF NUMBERS BAR */}
      <section
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid var(--border)",
          padding: "36px 0",
        }}
      >
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--headline)",
              marginBottom: "24px",
            }}
          >
            Join over <strong style={{ color: "var(--primary)" }}>100,000+</strong> developers learning on Dot Net Interview Community!
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <YouTubeIcon size={24} />
              <div style={{ textAlign: "left" }}>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--headline)" }}>50,000+</strong>
                <span style={{ fontSize: "0.78rem", color: "var(--body-muted)" }}>YouTube Learners</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <LinkedInIcon size={24} />
              <div style={{ textAlign: "left" }}>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--headline)" }}>25,000+</strong>
                <span style={{ fontSize: "0.78rem", color: "var(--body-muted)" }}>LinkedIn Network</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <AmazonIcon size={24} />
              <div style={{ textAlign: "left" }}>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--headline)" }}>8 Published</strong>
                <span style={{ fontSize: "0.78rem", color: "var(--body-muted)" }}>Amazon Bestsellers</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
              <CheckCircle2 size={24} color="var(--primary)" />
              <div style={{ textAlign: "left" }}>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "var(--headline)" }}>100%</strong>
                <span style={{ fontSize: "0.78rem", color: "var(--body-muted)" }}>Interview Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2B: COMMUNITY INTRODUCTION & INFOGRAPHIC */}
      <section className="section section-mint">
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "48px", alignItems: "center" }}>
            <div>
              <span className="eyebrow">YOUR COMMUNITY</span>
              <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", marginBottom: "16px" }}>
                Your Community for Technical Interview Success.
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.75", color: "var(--body)", marginBottom: "20px" }}>
                Dot Net Interview Community is a learning platform built to help software developers and QA testers clear technical interviews with genuine confidence. We eliminate jargon and focus on what interviewers actually ask.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontWeight: 600, color: "var(--headline)" }}>Structured technical interview books (6 Developer &amp; 2 QA titles)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontWeight: 600, color: "var(--headline)" }}>Visual architectural breakdowns &amp; weekly video tutorials</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontWeight: 600, color: "var(--headline)" }}>Personalized ATS-friendly resume writing services</span>
                </div>
              </div>

              <Link href="/about-dnic/" className="button button-primary">
                Learn About DNIC <ArrowRight size={16} />
              </Link>
            </div>

            {/* Official Community Infographic */}
            <div style={{ background: "#FFFFFF", padding: "12px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", boxShadow: "var(--shadow-lg)" }}>
              <img
                src="/images/infographics/community-dnic.jpeg"
                alt="Dot Net Interview Community Infographic"
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WRITTEN BY AMAZON BESTSELLING AUTHOR (BROWSER WINDOW MOCKUP) */}
      <section className="section" style={{ background: "#FAFAFA" }}>
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", margin: 0 }}>
              Written by Amazon Bestselling Author
            </h2>
            <span className="handwritten-badge">That&apos;s us! ✍️</span>
          </div>
          <p style={{ color: "var(--body-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "10px auto 36px" }}>
            Verified publications authored by Nirbhay Chauhan, trusted by thousands of candidates preparing for senior rounds.
          </p>

          {/* Browser Window Mockup */}
          <div className="browser-mockup">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot browser-dot-red" />
                <span className="browser-dot browser-dot-yellow" />
                <span className="browser-dot browser-dot-green" />
              </div>
              <div className="browser-address">
                <Globe size={13} />
                <span>amazon.in/stores/Nirbhay-Chauhan/author/B0DV5KTJCF</span>
              </div>
            </div>

            {/* Inside Browser Content */}
            <div style={{ padding: "36px 28px", background: "#FFFFFF" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", borderBottom: "1px solid #E5E7EB", paddingBottom: "14px", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#111827" }}>
                    amazon
                  </span>
                  <span style={{ fontSize: "0.78rem", background: "#FEF3C7", color: "#92400E", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>
                    Author Store
                  </span>
                </div>
                <div style={{ display: "flex", gap: "4px", color: "#F59E0B", fontSize: "0.85rem" }}>
                  <span>★ ★ ★ ★ ★</span>
                  <span style={{ color: "#374151", fontWeight: 700, marginLeft: "4px" }}>4.8 / 5 Rating</span>
                </div>
              </div>

              {/* Books Row in Mockup */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "18px",
                  alignItems: "stretch",
                }}
              >
                {books.slice(0, 4).map((b) => (
                  <div
                    key={b.slug}
                    style={{
                      background: "#FAFAFA",
                      border: "1px solid #E5E7EB",
                      borderRadius: "10px",
                      padding: "16px 12px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                      <img
                        src={b.coverImageTight || b.coverImage}
                        alt={b.title}
                        style={{
                          height: "170px",
                          width: "auto",
                          objectFit: "contain",
                          filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.12))",
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.62rem", fontWeight: 800, color: b.accentHex, textTransform: "uppercase" }}>
                        {b.label}
                      </span>
                      <strong style={{ fontSize: "0.82rem", display: "block", color: "#111827", margin: "4px 0", lineHeight: 1.3 }}>
                        {b.title}
                      </strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", paddingTop: "8px", borderTop: "1px dashed #D1D5DB" }}>
                      <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--primary)" }}>₹{b.ebookPrice}</span>
                      <span style={{ fontSize: "0.68rem", color: "#6B7280" }}>Paperback &amp; Kindle</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "32px" }}>
            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill-btn-green"
            >
              Read on Amazon Author Store ↗
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4: ALL-IN-ONE BUNDLE FOR END-TO-END INTERVIEW PREP (THE 8-CARD GRID) */}
      <section className="section">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              background: "#D1FAE5",
              color: "#065F46",
              fontSize: "0.75rem",
              fontWeight: 800,
              padding: "4px 14px",
              borderRadius: "9999px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            ALL-IN-ONE BUNDLE
          </span>

          <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 2.8rem)", marginBottom: "14px" }}>
            All-in-One Bundle for End-to-End Interview Prep
          </h2>

          <p style={{ color: "var(--body-muted)", fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto 48px" }}>
            Eight specialized titles covering core runtime fundamentals, modern C#, distributed cloud patterns, and senior QA automation.
          </p>

          {/* 8 Book Cards Grid */}
          <div className="books-grid">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>

          <div style={{ marginTop: "44px" }}>
            <Link href="/books/" className="hero-pill-btn-black">
              Explore All 8 Books (100+ Hours of Prep) ↗
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4B: TECHNICAL INTERVIEW ROADMAP INFOGRAPHIC */}
      <section className="section section-subtle">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">PREPARATION CURRICULUM</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "14px" }}>
            Technical Interview Preparation Roadmap
          </h2>
          <p style={{ color: "var(--body)", fontSize: "1.05rem", maxWidth: "620px", margin: "0 auto 36px" }}>
            Follow our structured step-by-step roadmap from core runtime fundamentals to senior architecture and QA frameworks.
          </p>

          <div style={{ maxWidth: "800px", margin: "0 auto", background: "#FFFFFF", padding: "16px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
            <img
              src="/images/infographics/interview-roadmap.jpeg"
              alt="Technical Interview Roadmap Infographic"
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: DESIGNED BY TOP ENGINEERS FROM FAANG & BEYOND */}
      <section className="section">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>
            Designed by Top Engineers from <span style={{ color: "var(--primary)" }}>Leading Tech &amp; Beyond</span>
          </h2>
          <p style={{ color: "var(--body-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 40px" }}>
            Structured around questions and architectural standards verified across top engineering firms.
          </p>

          <div className="engineer-grid">
            {engineers.map((eng, idx) => (
              <div
                key={idx}
                className="engineer-card"
                style={{ background: eng.bg }}
              >
                <div className="engineer-avatar" style={{ color: eng.accent }}>
                  {eng.avatar}
                </div>
                <div style={{ textAlign: "left" }}>
                  <h4 style={{ fontSize: "1rem", margin: "0 0 2px", color: "#111827" }}>
                    {eng.name}
                  </h4>
                  <span style={{ fontSize: "0.82rem", color: "#4B5563", display: "block" }}>
                    {eng.role}
                  </span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      background: "#FFFFFF",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      marginTop: "8px",
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

          <div style={{ marginTop: "36px" }}>
            <Link href="/resume-writing/get-started/" className="hero-pill-btn-green">
              Start Your Prep Today ↗
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: SUCCESS CASES (PLACEMENT TABLE) */}
      <section className="section" style={{ background: "#F9FAFB" }}>
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>
            Success Cases
          </h2>
          <p style={{ color: "var(--body-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 36px" }}>
            Recent placement milestones and career leaps made by engineers who prepared with DNIC books.
          </p>

          {/* Table Wrap */}
          <div className="success-table-wrap">
            <table className="success-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Target Role</th>
                  <th>Outcome</th>
                  <th>Compensation / Hike</th>
                  <th>Prep Time</th>
                </tr>
              </thead>
              <tbody>
                {successCases.map((sc, i) => (
                  <tr key={i}>
                    <td>
                      <div
                        style={{
                          background: "#FFFFFF",
                          padding: "5px 10px",
                          borderRadius: "6px",
                          border: "1px solid var(--border)",
                          boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        {sc.logo}
                      </div>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: "var(--headline)" }}>{sc.role}</span>
                      <small style={{ display: "block", color: "var(--body-muted)" }}>Level: {sc.level}</small>
                    </td>
                    <td>
                      <span className="badge badge-teal">{sc.outcome}</span>
                    </td>
                    <td>
                      <strong style={{ color: "#065F46" }}>{sc.hike}</strong>
                    </td>
                    <td>{sc.prepTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "36px" }}>
            <Link href="/resume-writing/get-started/" className="hero-pill-btn-green">
              Start Your Success Story ↗
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: 100,000+ SUCCESS STORIES (TESTIMONIALS WALL) */}
      <section className="section section-mint">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>
            100,000+ Success Stories
          </h2>
          <p style={{ color: "var(--body)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 40px" }}>
            Verified feedback from engineers who prepared with Nirbhay Chauhan&apos;s interview guides.
          </p>

          <div className="reviews-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="review-card" style={{ textAlign: "left" }}>
                <div>
                  <div className="review-stars">{"★".repeat(t.rating)}</div>
                  <p className="review-text">“{t.text}”</p>
                </div>
                <div className="review-author">
                  <strong>{t.name}</strong>
                  <span>{t.role} · {t.city}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--primary)", marginTop: "4px", fontWeight: 700 }}>
                    {t.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "36px" }}>
            <Link href="/books/" className="hero-pill-btn-green">
              Get Started Now ↗
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: RESUME WRITING SERVICES & INFOGRAPHICS */}
      <section className="section">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">CAREER ADVANCEMENT</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "12px" }}>
            Your Experience Deserves a Better Resume.
          </h2>
          <p style={{ color: "var(--body-muted)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto 44px" }}>
            Recruiters spend seconds on a resume. We make those seconds count with ATS-optimized formatting and measurable outcomes.
          </p>

          <div className="pricing-grid" style={{ marginBottom: "52px" }}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`pricing-card ${pkg.isPopular ? "pricing-featured" : ""}`}
                style={{ textAlign: "left" }}
              >
                {pkg.isPopular && (
                  <span className="pricing-popular-badge">Most Popular</span>
                )}
                <div className="pricing-header">
                  <h3>{pkg.name}</h3>
                  <div className="pricing-target">{pkg.target}</div>
                </div>

                <div className="pricing-amount">
                  {money(pkg.price)}
                  <span>/ package</span>
                </div>

                <p className="pricing-desc">{pkg.blurb}</p>

                <ul className="pricing-features">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/resume-writing/get-started/"
                  className={`button ${pkg.isPopular ? "button-primary" : "button-secondary"}`}
                  style={{ width: "100%" }}
                >
                  Order My Resume <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Standout Tech Resume Infographic */}
          <div style={{ maxWidth: "860px", margin: "0 auto", background: "#F9FAFB", padding: "16px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>
            <img
              src="/images/infographics/resume-standout.jpeg"
              alt="Build a Standout Tech Resume Infographic"
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: WATCH, LEARN, IMPROVE TECH ARCHITECTURE */}
      <section className="section section-mint">
        <div className="shell text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">YOUTUBE ACADEMY</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "14px" }}>
            Watch. Learn. Improve.
          </h2>
          <p style={{ color: "var(--body)", fontSize: "1.05rem", maxWidth: "620px", margin: "0 auto 36px" }}>
            Visual architecture lessons breaking down concurrency, microservices, and interview scenarios on our official channel.
          </p>

          <div style={{ maxWidth: "880px", margin: "0 auto 36px", background: "#FFFFFF", padding: "16px", borderRadius: "var(--radius-xl)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}>
            <img
              src="/images/infographics/watch-learn-architecture.jpeg"
              alt="Watch, Learn, Improve Tech Architecture Infographic"
              style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)", display: "block" }}
            />
          </div>

          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-pill-btn-black"
          >
            Subscribe on YouTube Channel ↗
          </a>
        </div>
      </section>

      {/* SECTION 10: FAQ ACCORDION */}
      <section className="section section-subtle">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>Frequently Asked Questions.</h2>
            <p>Clear answers about our books, e-book delivery, Amazon orders, and resume services.</p>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary className="faq-summary">
                  <span>{f.q}</span>
                  <ChevronDown className="faq-icon" size={20} />
                </summary>
                <div className="faq-content">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/faq/" className="hero-pill-btn-black" style={{ fontSize: "0.95rem", padding: "10px 28px" }}>
              View all FAQs ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
