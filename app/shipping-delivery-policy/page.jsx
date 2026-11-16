import Link from "next/link";
import { ArrowLeft, Package, Clock, Truck } from "lucide-react";
import { site } from "../../lib/site";

export const metadata = {
  title: "Shipping & Delivery Policy | Dot Net Interview Community",
  description: "Shipping and digital delivery timelines for e-books and hardcover editions across India.",
};

export default function ShippingDeliveryPolicyPage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">
            <Truck size={14} /> FULFILLMENT & SHIPPING
          </span>
          <h1>Shipping & Delivery Policy</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            Clear, transparent delivery timelines for digital e-book downloads and physical printed books.
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

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Digital E-book Delivery</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            All e-book purchases are delivered digitally. Upon successful payment confirmation, an instant download link is generated on your order confirmation screen and automatically emailed to the address provided at checkout.
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Delivery time:</strong> Immediate (typically within 1–2 minutes of transaction approval).</li>
            <li><strong>Format:</strong> High-resolution, multi-device compatible PDF document.</li>
            <li><strong>Support:</strong> If you experience technical difficulties receiving or opening your download, contact <strong>{site.email}</strong>.</li>
          </ul>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. Hardcover Print Edition Shipping</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Physical hardcover editions are packed securely and dispatched via reliable courier partners across India.
          </p>
          <ul className="checklist" style={{ margin: "14px 0 24px" }}>
            <li><strong>Dispatch timeline:</strong> Dispatched within 2 working days of payment confirmation.</li>
            <li><strong>Delivery timeline:</strong> 3–5 working days across serviceable pin codes in India (metro cities usually arrive faster; remote locations may require up to 7 working days).</li>
            <li><strong>Tracking:</strong> Tracking numbers and courier tracking links are sent via email upon dispatch.</li>
            <li><strong>International shipping:</strong> Direct website orders currently ship within India. Readers outside India can order Kindle or paperback editions via Nirbhay Chauhan's Amazon author page.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
