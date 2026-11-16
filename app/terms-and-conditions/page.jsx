import Link from "next/link";
import { site } from "../../lib/site";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Dot Net Interview Community",
  description: "Terms and conditions governing the purchase and use of DNIC interview books, digital content, and resume services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">LEGAL TERMS</span>
          <h1>Terms & Conditions</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            Terms and conditions governing the purchase and use of DNIC interview books, content, and career services.
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

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Overview & Agreement</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Welcome to Dot Net Interview Community (<strong>{site.domain}</strong>). By browsing our website, purchasing e-books, ordering physical books, or enlisting resume services, you agree to comply with and be bound by these Terms and Conditions.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. Intellectual Property & Personal Use Only</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            All materials published on this website—including book manuscripts, e-book PDFs, interview guides, website copy, logos, and graphics—are the exclusive intellectual property and copyright of author <strong>Nirbhay Chauhan</strong> and Dot Net Interview Community.
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Personal license:</strong> All purchased e-books and digital downloads are licensed exclusively for your individual, personal educational use.</li>
            <li><strong>Prohibition on copying & reselling:</strong> You may not copy, reproduce, distribute, resell, upload to file-sharing networks, share via public forums, or create derivative works without prior written authorization.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>3. Pricing & Modifications</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Prices for e-books, hardcovers, and resume packages are subject to change without prior notice. However, once an order has been successfully placed, the price confirmed at checkout remains final for that transaction.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>4. Educational Disclaimer</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Our books, tutorials, and resume templates are designed to enhance your preparation and technical communication skills. While thousands of candidates use our guides to prepare, DNIC makes no guarantee of job placement, specific interview outcomes, or specific compensation offers.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>5. Governing Law & Jurisdiction</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            These terms and all transactions through this website shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </div>
      </section>
    </>
  );
}
