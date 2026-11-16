import Link from "next/link";
import { site } from "../lib/site";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { YouTubeIcon, LinkedInIcon, InstagramIcon, FacebookIcon, AmazonIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <h4>dnic.</h4>
            <p>
              Dot Net Interview Community is a learning platform for software developers and QA engineers preparing for technical interviews through focused books, video tutorials, and personalized resume services.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#64748B", marginTop: "12px" }}>
              Founded by author & interview coach <strong>{site.author}</strong>.
            </p>
          </div>

          {/* Column 1: Books & Learning */}
          <div className="footer-col">
            <h5>Interview Books</h5>
            <ul>
              <li><Link href="/books/">All 8 Books</Link></li>
              <li><Link href="/developer-interview-books/">Developer Books (6)</Link></li>
              <li><Link href="/qa-interview-books/">QA & Testing Books (2)</Link></li>
              <li><Link href="/learning-hub/">Learning Hub & Videos</Link></li>
              <li><a href={site.amazonAuthor} target="_blank" rel="noopener noreferrer">Amazon Author Store ↗</a></li>
            </ul>
          </div>

          {/* Column 2: Services & Community */}
          <div className="footer-col">
            <h5>Services & Community</h5>
            <ul>
              <li><Link href="/resume-writing/">Resume Writing Services</Link></li>
              <li><Link href="/resume-writing/get-started/">Find Your Resume Plan</Link></li>
              <li><Link href="/about-dnic/">About DNIC</Link></li>
              <li><Link href="/about-nirbhay-chauhan/">About Nirbhay Chauhan</Link></li>
              <li><Link href="/community/">Community Hub</Link></li>
              <li><Link href="/reviews/">Reviews & Feedback</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect & Social */}
          <div className="footer-col">
            <h5>Connect With Us</h5>
            <ul>
              <li>
                <a href={site.youtube} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <YouTubeIcon size={16} /> YouTube Channel
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <InstagramIcon size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <FacebookIcon size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href={site.amazonAuthor} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <AmazonIcon size={16} /> Amazon Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DNIC.in · All rights reserved.</span>

          <div className="footer-legal-links">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-and-conditions/">Terms & Conditions</Link>
            <Link href="/resume-service-policy/">Resume Service & Refund Policy</Link>
            <Link href="/shipping-delivery-policy/">Shipping & Delivery</Link>
            <Link href="/amazon-disclosure/">Amazon Purchase Disclosure</Link>
          </div>

          <span style={{ color: "#64748B" }}>Built for Developers. Designed for Career Growth.</span>
        </div>
      </div>
    </footer>
  );
}
