import Link from "next/link";
import { site } from "../../lib/site";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dot Net Interview Community",
  description: "Learn how Dot Net Interview Community collects, uses, protects, and handles your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">
            <ShieldCheck size={14} /> DATA PROTECTION
          </span>
          <h1>Privacy Policy</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            How Dot Net Interview Community collects, handles, and protects your personal data with integrity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell-narrow" style={{ background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px 48px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ marginBottom: "28px" }}>
            <Link href="/" className="text-link" style={{ fontSize: "0.85rem" }}>
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Information We Collect</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            We only collect personal information that is strictly necessary to fulfill e-book orders, provide resume services, and answer support enquiries:
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Contact information:</strong> Your full name, email address, and physical mailing address (for hardcover deliveries).</li>
            <li><strong>Resume details:</strong> Employment history, technical skill summaries, education credentials, and target roles provided during the resume questionnaire.</li>
            <li><strong>Payment data:</strong> We do NOT collect, see, or store your credit/debit card numbers, CVVs, or bank account credentials. All transactions are securely handled directly by authorized payment gateways.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. How We Use Your Data</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Your data is used solely to:
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li>Deliver digital e-book download links and dispatch physical hardcover orders.</li>
            <li>Communicate order status, tracking updates, and direct customer support.</li>
            <li>Draft, revise, and deliver customized technical resumes.</li>
            <li>Comply with applicable Indian tax and consumer protection regulations.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>3. We Never Sell Your Data</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            We maintain a strict zero-spam, zero-reselling policy. <strong>We do not sell, rent, trade, or monetize your personal information to any third parties or marketing brokers.</strong> Your data is shared only with trusted operational service providers strictly required to complete your order (such as delivery couriers and transactional email dispatchers).
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>4. Data Deletion Requests</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            You retain complete control over your personal records. You may request a copy of the personal information we hold or ask for the permanent deletion of your resume drafts and contact history at any time by emailing <strong>{site.email}</strong> with the subject line <em>“Data Deletion Request”</em>.
          </p>
        </div>
      </section>
    </>
  );
}
