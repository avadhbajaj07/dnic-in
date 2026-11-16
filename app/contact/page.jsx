import ContactForm from "../../components/ContactForm";
import { site } from "../../lib/site";
import { Mail, MessageCircle, Clock, BookOpen, Send } from "lucide-react";
import { YouTubeIcon, LinkedInIcon, InstagramIcon, FacebookIcon, AmazonIcon } from "../../components/Icons";

export const metadata = {
  title: "Contact Us | We’d Love to Hear From You",
  description:
    "Questions about a book, an order, or your resume? Send us a message and we’ll reply within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">
            <Mail size={14} /> GET IN TOUCH
          </span>
          <h1>We’d Love to Hear From You.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Questions about a book, an order, or your resume? Send us a message and we’ll reply within 24–48 hours.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="section">
        <div className="shell contact-layout-grid">
          {/* Left Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Direct Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                background: "var(--bg-subtle)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
              }}
            >
              <span className="badge badge-teal" style={{ marginBottom: "12px" }}>
                DIRECT CONTACT
              </span>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "8px" }}>Reach Us Directly</h3>
              <p style={{ color: "var(--body)", fontSize: "0.92rem", marginBottom: "20px" }}>
                All support, book inquiries, and resume consultations are managed directly via email.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <Mail size={20} color="var(--primary)" style={{ marginTop: "2px" }} />
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 700, color: "var(--body-muted)", display: "block" }}>
                      Official Email Address
                    </span>
                    <a href={`mailto:${site.email}`} style={{ fontWeight: 600, color: "var(--headline)" }}>
                      {site.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <Clock size={20} color="var(--primary)" style={{ marginTop: "2px" }} />
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 700, color: "var(--body-muted)", display: "block" }}>
                      Response Window
                    </span>
                    <span style={{ color: "var(--body)", fontSize: "0.92rem" }}>
                      Within 24–48 business hours via email
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--primary-light)",
                border: "1px solid var(--border-teal)",
                borderRadius: "var(--radius-lg)",
                padding: "32px",
              }}
            >
              <h4 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "var(--primary-dark)" }}>
                Follow Our Platforms
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--body)", marginBottom: "18px" }}>
                Get daily tips, video drops, and book release news directly in your feed.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary button-sm"
                  style={{ justifyContent: "flex-start" }}
                >
                  <YouTubeIcon size={16} /> YouTube Channel ↗
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary button-sm"
                  style={{ justifyContent: "flex-start" }}
                >
                  <LinkedInIcon size={16} /> LinkedIn Company Page ↗
                </a>
                <a
                  href={site.amazonAuthor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary button-sm"
                  style={{ justifyContent: "flex-start" }}
                >
                  <AmazonIcon size={16} /> Nirbhay's Amazon Store ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
