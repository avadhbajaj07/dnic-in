import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Resume Service & Refund Policy | Dot Net Interview Community",
  description: "Terms, deliverables, turnaround times, and refund rules for DNIC personalized resume writing services.",
};

export default function ResumeServicePolicyPage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">SERVICE DETAILS</span>
          <h1>Resume Service & Refund Policy</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            A transparent, straightforward process for personalized technical resume writing enquiries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell-narrow" style={{ background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px 48px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ marginBottom: "28px" }}>
            <Link href="/resume-writing/" className="text-link" style={{ fontSize: "0.85rem" }}>
              <ArrowLeft size={14} /> Back to Resume Services
            </Link>
          </div>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Packages & Quoted Fees</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Our resume services are structured into three distinct experience tiers:
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Career Starter (₹1,000):</strong> For students, freshers, and early-career professionals (0–1 year).</li>
            <li><strong>Career Growth (₹2,000):</strong> For working developers and QA testers with 2–5 years of experience.</li>
            <li><strong>Career Leadership (₹3,000):</strong> For senior engineers, tech leads, architects, and engineering managers with 6+ years of experience.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. How an Enquiry Works</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Submit the 6-question career questionnaire. DNIC will automatically send one confirmation email detailing your recommended package, quoted fee, required document checklist, and Nirbhay Chauhan's authorized UPI payment QR code. You then reply directly to that email with your career details, existing resume, and transaction reference.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>3. Manual Verification & Turnaround</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Nirbhay Chauhan personally verifies all payments and handles your resume drafting. Submitting a transaction reference or screenshot does not automatically approve an order; resume work begins once receipt is verified. Standard first-draft delivery is <strong>2–3 working days</strong> from the receipt of all required documents.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>4. Revisions & Satisfaction</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Every package includes direct revision rounds via email. If you need modifications to project descriptions, skill phrasing, or format adjustments, simply email Nirbhay directly and we will fine-tune the documents. Final deliverables include an ATS-optimized PDF and an editable Microsoft Word document.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>5. Refund Terms</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Because personalized resume writing involves custom creative and technical effort:
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Before work commences:</strong> A 100% refund is available if you cancel prior to our writer drafting your resume.</li>
            <li><strong>After first draft delivery:</strong> Refunds are not provided once the first draft has been delivered. Instead, we offer revision rounds until the resume accurately represents your accomplishments and goals.</li>
          </ul>

          <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
            <Link href="/resume-writing/get-started/" className="button button-primary">
              Start Resume Assessment ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
