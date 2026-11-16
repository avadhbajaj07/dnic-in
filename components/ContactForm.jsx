"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Book Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--card-mint)",
          border: "1px solid var(--border-teal)",
          borderRadius: "var(--radius-lg)",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "var(--primary)",
            color: "#FFFFFF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <CheckCircle2 size={32} />
        </div>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "8px", color: "var(--headline)" }}>
          Thank You, {formData.name}!
        </h3>
        <p style={{ color: "var(--body)", maxWidth: "480px", margin: "0 auto 24px", lineHeight: "1.65" }}>
          We have received your message regarding <strong>{formData.subject}</strong>. Nirbhay will review it and reply directly to <strong>{formData.email}</strong> within 24–48 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "Book Inquiry", message: "" });
          }}
          className="button button-secondary button-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "36px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <h3 style={{ fontSize: "1.35rem", marginBottom: "6px" }}>Send Us a Message</h3>
      <p style={{ fontSize: "0.9rem", color: "var(--body-muted)", marginBottom: "24px" }}>
        Fill out the details below and we’ll reply to your email within 24–48 business hours.
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            required
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            required
            type="email"
            placeholder="e.g. rahul@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="field full">
          <label htmlFor="subject">Subject *</label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          >
            <option value="Book Inquiry">Question about a Book / Amazon Order</option>
            <option value="Resume Writing">Question about Resume Services</option>
            <option value="E-book Download">E-book Download Assistance</option>
            <option value="Hardcover Shipping">Hardcover Shipping & Tracking</option>
            <option value="General Question">Community Question / Collaboration</option>
          </select>
        </div>

        <div className="field full">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Describe what you need help with..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
        <button type="submit" className="button button-primary">
          Send Message <Send size={16} />
        </button>
        <span style={{ fontSize: "0.82rem", color: "var(--body-muted)" }}>
          Average response: within 24–48 hours
        </span>
      </div>
    </form>
  );
}
