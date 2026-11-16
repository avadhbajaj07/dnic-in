import Link from "next/link";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { site } from "../../lib/site";

export const metadata = {
  title: "Amazon Purchase Disclosure | Dot Net Interview Community",
  description: "Important information regarding book purchases, shipping, and fulfillment handled by Amazon.",
};

export default function AmazonDisclosurePage() {
  return (
    <>
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell-narrow text-center" style={{ textAlign: "center" }}>
          <span className="eyebrow">PURCHASE TRANSPARENCY</span>
          <h1>Amazon Purchase Disclosure</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--body)" }}>
            What to expect when exploring and purchasing physical and Kindle editions on Amazon.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell-narrow" style={{ background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "40px 48px", boxShadow: "var(--shadow-sm)" }}>
          <div style={{ marginBottom: "28px" }}>
            <Link href="/books/" className="text-link" style={{ fontSize: "0.85rem" }}>
              <ArrowLeft size={14} /> Back to Books Catalog
            </Link>
          </div>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>1. Fulfillment by Amazon</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Dot Net Interview Community showcases the published works of author <strong>Nirbhay Chauhan</strong> and provides direct product links to Amazon. When you choose to purchase a paperback, hardcover, or Kindle edition on Amazon, all subsequent ordering, checkout, payment processing, shipping, delivery tracking, and return operations are conducted directly by Amazon.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>2. Pricing & Edition Availability</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            Prices, promotional discounts, delivery estimates, Prime shipping eligibility, and regional inventory on Amazon are managed by Amazon independently of this website.
          </p>

          <h2 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>3. Customer Support for Amazon Orders</h2>
          <p style={{ color: "var(--body)", lineHeight: "1.7" }}>
            If you experience shipping delays, package damage, or wish to return an item purchased on Amazon, please contact Amazon Customer Support through your Amazon account order history. For direct digital e-book inquiries purchased on DNIC.in, you may contact us directly at <strong>{site.email}</strong>.
          </p>

          <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
            <a
              href={site.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Visit Nirbhay Chauhan's Amazon Store <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
