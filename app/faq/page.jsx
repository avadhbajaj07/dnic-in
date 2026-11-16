import Link from "next/link";
import { site } from "../../lib/site";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Dot Net Interview Community",
  description:
    "Common questions about DNIC interview books, instant digital e-book downloads, Amazon shipping, payment security, and resume writing services.",
};

const faqs = [
  {
    q: "How do I get my e-book after buying?",
    a: "You’ll get an instant download link by email right after payment is confirmed. You can also download it directly from your order confirmation page.",
  },
  {
    q: "Can I read the e-books on my mobile phone or tablet?",
    a: "Yes. All our e-books are standard PDF files formatted and optimized for comfortable reading on smartphones, tablets, e-readers, laptops, and desktop screens.",
  },
  {
    q: "Do you ship hardcover books across India?",
    a: "Yes. We ship hardcover print editions across all serviceable pin codes in India. Dispatches occur within 2 working days, and delivery usually takes 3–5 working days. You will receive tracking details directly via email.",
  },
  {
    q: "Do you offer cash on delivery (COD)?",
    a: "No. To keep our book prices affordable and shipping overhead low, all orders are processed via secure prepaid digital payments (UPI, credit/debit cards, and net banking).",
  },
  {
    q: "Which book should I start with?",
    a: "Beginners and early-career developers should start with 'Master C# Interview Preparation' and 'Master .NET Fundamentals'. For backend or cloud-focused roles, choose 'Mastering the .NET Core Interview' or 'Conquer the Azure Developer Interview'. For QA and testing paths, start with 'Software Testing Interview Secrets'. Not sure? Message us on our Contact page or email hello@dnic.in and we’ll recommend the best fit for your target role.",
  },
  {
    q: "How long does resume writing take?",
    a: "Our standard turnaround time is 2–3 working days after you submit your career details and documents through our questionnaire and email.",
  },
  {
    q: "Can I get a refund?",
    a: "Because e-books are digital files delivered instantly, they are non-refundable once downloaded unless there is a duplicate charge or corrupted file. For hardcover books, if your copy arrives damaged or misprinted, notify us within 7 days with photos and we will replace or refund it. Resume services can be refunded anytime before work begins. See our full Resume Service & Refund Policy for details.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. All digital payments and authorized UPI payments are processed via 256-bit encrypted industry-standard gateways. We never see, collect, or store your credit card, debit card, or banking details.",
  },
  {
    q: "Are the books also available on Amazon?",
    a: "Yes! Every title in the Dot Net Interview Preparation series is available on Amazon. You can purchase physical paperbacks or Kindle editions directly through Nirbhay Chauhan's verified Amazon author store.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">
            <HelpCircle size={14} /> QUESTIONS, ANSWERED
          </span>
          <h1>Frequently Asked Questions.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Useful answers about DNIC interview books, instant downloads, physical hardcover deliveries, payments, and personalized resume writing services.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="section">
        <div className="shell">
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

          {/* Need More Help Box */}
          <div
            style={{
              maxWidth: "820px",
              margin: "56px auto 0",
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.25rem", margin: "0 0 6px" }}>Still have a question?</h3>
              <p style={{ color: "var(--body)", margin: 0, fontSize: "0.95rem" }}>
                Send us a message and our team will get back to you within 24–48 hours.
              </p>
            </div>

            <Link href="/contact/" className="button button-primary">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
