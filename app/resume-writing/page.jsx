import Link from "next/link";
import { packages, money } from "../../lib/site";
import { CheckCircle2, ArrowRight, ArrowUpRight, Clock, ShieldCheck, FileText, Sparkles, Check } from "lucide-react";

export const metadata = {
  title: "Professional Resume Writing for Developers & QA | From ₹1,000",
  description:
    "Recruiters spend seconds on a resume. We make those seconds count. Professional ATS-friendly resume writing for .NET, C#, cloud, and QA engineers starting from ₹1,000.",
};

const packageImages = {
  starter: "/images/infographics/resume-starter.jpeg",
  growth: "/images/infographics/resume-growth.jpeg",
  leadership: "/images/infographics/resume-leadership.jpeg",
};

export default function ResumeServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell" style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <span className="eyebrow">
            <Sparkles size={14} /> PROFESSIONAL CAREER SERVICES
          </span>
          <h1>Your Experience Deserves a Better Resume.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151", marginBottom: "24px" }}>
            Recruiters spend less than 10 seconds scanning a resume. We build tailored, ATS-friendly technical resumes that emphasize measurable outcomes, system ownership, and technical depth.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/resume-writing/get-started/" className="button button-primary">
              Take the 2-Min Assessment <ArrowRight size={16} />
            </Link>
            <a href="#plans" className="button button-secondary">
              Compare 3 Packages ↓
            </a>
          </div>
        </div>
      </section>

      {/* Featured Infographic: Find Your Ideal Resume Plan */}
      <section className="section" style={{ paddingTop: "20px", paddingBottom: "40px" }}>
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
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--body-muted)", marginLeft: "8px" }}>
                  Find Your Ideal Resume Plan — Visual Comparison
                </span>
              </div>
              <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>
                ATS-Optimized Methodology
              </span>
            </div>
            <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
              <img
                src="/images/infographics/resume-plan.jpeg"
                alt="Find Your Ideal Resume Plan Infographic"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="section" id="plans">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">TRANSPARENT PRICING</span>
            <h2>Select Your Experience Level.</h2>
            <p>Every package includes an ATS-optimized structure, technical keyword tailoring, and direct email revision rounds.</p>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`pricing-card ${pkg.isPopular ? "pricing-featured" : ""}`}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {pkg.isPopular && (
                  <span className="pricing-popular-badge">Most Popular</span>
                )}

                {/* Visual Thumbnail for this tier */}
                {packageImages[pkg.id] && (
                  <div
                    style={{
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      marginBottom: "16px",
                      background: "#F9FAFB",
                    }}
                  >
                    <img
                      src={packageImages[pkg.id]}
                      alt={`${pkg.name} Infographic`}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      loading="lazy"
                    />
                  </div>
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

                <ul className="pricing-features" style={{ flexGrow: 1 }}>
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
                  style={{ width: "100%", marginTop: "16px" }}
                >
                  Order My Resume <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          {/* Standout Tech Resume & Self-Reflection */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "64px auto 0",
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "36px" }}>
                <span className="badge badge-teal" style={{ marginBottom: "12px" }}>
                  RESUME AUDIT CHECKLIST
                </span>
                <h3 style={{ fontSize: "1.45rem", color: "var(--headline)", marginBottom: "16px" }}>
                  Ask yourself before sending your next job application:
                </h3>
                <ul className="checklist" style={{ gap: "16px" }}>
                  <li>
                    <strong>Is my resume ATS-friendly?</strong> (Does it pass automated applicant tracking systems without losing formatting, headings, or tables?)
                  </li>
                  <li>
                    <strong>Does it showcase measurable achievements, not just daily duties?</strong> (Can a hiring manager immediately see business impact and scaling metrics?)
                  </li>
                  <li>
                    <strong>Would a technical recruiter understand my core value in 10 seconds?</strong> (Is your tech stack, system ownership, and seniority clear at a glance?)
                  </li>
                </ul>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/resume-writing/get-started/" className="button button-primary">
                    Start Your Resume Upgrade <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div style={{ background: "#F9FAFB", padding: "16px", borderLeft: "1px solid var(--border)" }}>
                <img
                  src="/images/infographics/resume-standout.jpeg"
                  alt="Build a Standout Tech Resume Infographic"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "var(--radius-md)",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="section section-subtle">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">OUR PROCESS</span>
            <h2>Four Clear Steps to Your New Resume.</h2>
            <p>A simple, transparent process managed directly with Nirbhay Chauhan via email. No complicated dashboards or recurring fees.</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-card-number">01</span>
              <h3>Choose & Pay Securely</h3>
              <p>
                Take our 6-step assessment questionnaire to confirm your experience tier, then scan Nirbhay's authorized UPI payment QR code.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">02</span>
              <h3>Share Your Details</h3>
              <p>
                Reply directly to your confirmation email with your existing draft, educational milestones, technical skills, and target job roles.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">03</span>
              <h3>Receive First Draft</h3>
              <p>
                Within 2–3 working days, receive a completely revamped, ATS-tailored technical resume draft in your inbox.
              </p>
            </div>

            <div className="benefit-card">
              <span className="benefit-card-number">04</span>
              <h3>Revisions & Final Files</h3>
              <p>
                Request fine-tuning adjustments via email and receive your final ATS-optimized PDF and editable Word documents.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "44px" }}>
            <Link href="/resume-writing/get-started/" className="button button-primary">
              Take the 2-Minute Resume Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
