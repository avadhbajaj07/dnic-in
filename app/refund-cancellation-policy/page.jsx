import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { site } from "../../lib/site";

export const metadata = {
  title: "Refund & Cancellation Policy | Dot Net Interview Community",
  description: "Refund and cancellation terms for e-books, physical hardcover books, and personalized resume writing services.",
};

export default function RefundCancellationPolicyPage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">
            <ShieldAlert size={14} /> TRANSPARENT TERMS
          </span>
          <h1>Refund & Cancellation Policy</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            Our straightforward policy for digital products, printed editions, and resume writing services.
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

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Digital E-books</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Because e-books are digital goods delivered and downloaded immediately upon payment, they are non-refundable once the file link has been accessed. However, we issue immediate replacements or full refunds if you were charged twice or if a technical file defect cannot be resolved within 24 hours.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. Physical Hardcover Books</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            If your book arrives damaged, defective, or misprinted, please notify us within <strong>7 days</strong> of delivery at <strong>{site.email}</strong> with photos of the damaged outer packaging and pages. We will ship a free replacement copy immediately or issue a 100% refund.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>3. Resume Writing Services</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Resume writing involves customized consultation:
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Before work begins:</strong> A 100% refund is available if cancellation is requested prior to drafting.</li>
            <li><strong>After first draft delivery:</strong> Refunds are not provided once the draft has been delivered. Instead, we offer direct revision rounds to adjust wording and formatting until you are satisfied.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>4. Refund Processing</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Approved refunds are credited back to the original payment source (bank account, credit/debit card, or UPI ID) within <strong>5–7 working days</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
