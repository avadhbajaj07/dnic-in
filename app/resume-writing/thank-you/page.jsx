import Link from "next/link";
import { CheckCircle2, Mail, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Resume Enquiry Received | DNIC",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="shell-narrow" style={{ textAlign: "center" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "var(--primary-light)",
            color: "var(--primary)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <CheckCircle2 size={40} />
        </div>

        <span className="eyebrow" style={{ display: "block", width: "fit-content", margin: "0 auto 16px" }}>
          ENQUIRY SUBMITTED SUCCESSFULLY
        </span>

        <h1 style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)", marginBottom: "16px" }}>
          We’ve Sent Your Plan Details to Your Email.
        </h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--body)", maxWidth: "600px", margin: "0 auto 32px" }}>
          Please check your inbox. We have emailed your recommended package summary, required documents checklist, and Nirbhay Chauhan's official UPI payment QR code.
        </p>

        <div
          style={{
            background: "var(--bg-subtle)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            maxWidth: "540px",
            margin: "0 auto 36px",
            textAlign: "left",
          }}
        >
          <h4 style={{ fontSize: "1rem", marginBottom: "12px", color: "var(--headline)" }}>
            What happens next?
          </h4>
          <ul className="checklist" style={{ fontSize: "0.9rem", gap: "10px" }}>
            <li>Scan the UPI QR in your email to transfer the quoted resume fee.</li>
            <li>Reply to that same email with your transaction UTR reference and existing resume/career documents.</li>
            <li>Nirbhay personally verifies receipt and delivers your customized first draft within 2–3 working days.</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button button-primary">
            Return to Homepage <ArrowRight size={16} />
          </Link>
          <Link href="/books/" className="button button-secondary">
            Explore Interview Books
          </Link>
        </div>

        <p style={{ fontSize: "0.82rem", color: "var(--body-muted)", marginTop: "24px" }}>
          Did not see the email? Please check your Spam or Promotions folder, or reach out to <strong>hello@dnic.in</strong>.
        </p>
      </div>
    </section>
  );
}
