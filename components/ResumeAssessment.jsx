"use client";

import { useState } from "react";
import { packages, recommendedPackage, money } from "../lib/site";
import { ArrowRight, ArrowLeft, Check, ShieldCheck, Clock, FileText, AlertCircle } from "lucide-react";

const questions = [
  {
    key: "careerStage",
    number: "01",
    title: "Where are you in your career right now?",
    subtitle: "Select the option that best reflects your current career milestone.",
    options: ["Student", "Fresher / Entry level", "Working professional", "Career switcher"],
  },
  {
    key: "experience",
    number: "02",
    title: "How many years of relevant work experience do you have?",
    subtitle: "Count your total professional software development or QA experience.",
    options: ["0–1 year", "2–5 years", "6–10 years", "10+ years"],
  },
  {
    key: "targetRole",
    number: "03",
    title: "What is your target job role?",
    subtitle: "This helps tailor technical keywords, architectural scope, and recruiter focus.",
    options: [
      "Software Development",
      "QA / Testing",
      "Data / Cloud",
      "Leadership / Management",
      "Other",
    ],
  },
  {
    key: "existingResume",
    number: "04",
    title: "Do you already have a resume draft?",
    subtitle: "We can restructure and elevate your existing resume or draft one from scratch.",
    options: ["Yes, improve my resume", "No, create a new resume"],
  },
  {
    key: "careerGoal",
    number: "05",
    title: "What is your primary career goal for this search?",
    subtitle: "Your goal guides how we frame your past accomplishments and narrative.",
    options: [
      "My first job",
      "Changing jobs",
      "Career advancement",
      "Switching career paths",
    ],
  },
];

export default function ResumeAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 6;
  const isQuestionStep = step < questions.length;
  const currentQ = questions[step];
  const recommended = recommendedPackage(answers.careerStage, answers.experience, answers.targetRole);

  const handleOptionSelect = (val) => {
    setAnswers((prev) => ({ ...prev, [currentQ.key]: val }));
    setError("");
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.consent) {
      setError("Please check the consent box to receive your plan and payment details by email.");
      return;
    }

    setPending(true);
    setError("");

    try {
      const res = await fetch("/api/resume-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          careerStage: answers.careerStage,
          experience: answers.experience,
          targetRole: answers.targetRole,
          existingResume: answers.existingResume,
          careerGoal: answers.careerGoal,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          consent: contact.consent,
          website: "", // Honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit enquiry right now.");
      }

      window.location.assign("/resume-writing/thank-you/");
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="assessment-container">
      {/* Progress Meta */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="eyebrow" style={{ margin: 0 }}>
          DNIC CAREER ASSESSMENT
        </span>
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--body-muted)" }}>
          STEP {Math.min(step + 1, totalSteps)} OF {totalSteps}
        </span>
      </div>

      {/* Progress Track */}
      <div className="assessment-progress-bar">
        <div
          className="assessment-progress-fill"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Question Steps 1–5 */}
      {isQuestionStep ? (
        <div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>
            QUESTION {currentQ.number}
          </span>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", marginTop: "8px", marginBottom: "8px" }}>
            {currentQ.title}
          </h1>
          <p style={{ color: "var(--body-muted)", fontSize: "1.05rem", marginBottom: "32px" }}>
            {currentQ.subtitle}
          </p>

          <div className="options-grid">
            {currentQ.options.map((option) => (
              <button
                type="button"
                key={option}
                className={`option-btn ${answers[currentQ.key] === option ? "selected" : ""}`}
                onClick={() => handleOptionSelect(option)}
              >
                <span>{option}</span>
                <ArrowRight size={18} color="var(--primary)" />
              </button>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px" }}>
            {step > 0 ? (
              <button
                type="button"
                className="button button-secondary button-sm"
                onClick={() => setStep((s) => s - 1)}
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <a href="/resume-writing/" className="text-link" style={{ fontSize: "0.88rem" }}>
                ← View all resume packages
              </a>
            )}
            <span style={{ fontSize: "0.8rem", color: "var(--body-muted)" }}>
              No login or password required
            </span>
          </div>
        </div>
      ) : (
        /* Final Step 6: Recommendation & Contact Details */
        <div>
          <span className="eyebrow">YOUR RECOMMENDED PLAN</span>
          <h1 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)", marginTop: "8px", marginBottom: "8px" }}>
            Here is your personalized resume package.
          </h1>
          <p style={{ color: "var(--body)", fontSize: "1.05rem", marginBottom: "28px" }}>
            Based on your experience ({answers.experience}) and target role ({answers.targetRole}), this tier will best position your accomplishments.
          </p>

          {/* Recommended Card */}
          <div className="recommendation-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: "6px" }}>
                  RECOMMENDED FOR YOU
                </span>
                <h2 style={{ fontSize: "1.8rem", margin: "4px 0" }}>{recommended.name}</h2>
                <span style={{ color: "var(--body-muted)", fontSize: "0.9rem" }}>{recommended.target}</span>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "Plus Jakarta Sans, sans-serif", color: "var(--headline)" }}>
                  {money(recommended.price)}
                </span>
                <span style={{ display: "block", fontSize: "0.8rem", color: "var(--body-muted)" }}>All-inclusive fee</span>
              </div>
            </div>

            <p style={{ color: "var(--headline)", fontSize: "0.98rem", marginBottom: "20px", fontWeight: 500 }}>
              {recommended.blurb}
            </p>

            <ul className="checklist" style={{ marginBottom: "20px" }}>
              {recommended.features.map((feat, idx) => (
                <li key={idx}><strong>{feat}</strong></li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", paddingTop: "14px", borderTop: "1px solid var(--border-teal)", fontSize: "0.85rem", color: "var(--primary-dark)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Clock size={16} /> 2–3 Days Turnaround
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <FileText size={16} /> ATS-Friendly Word + PDF
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={16} /> Direct Author Consultation
              </span>
            </div>
          </div>

          {/* Contact Details Form */}
          <form onSubmit={handleSubmit} style={{ background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "6px" }}>Where should we send your plan & payment details?</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--body-muted)", marginBottom: "24px" }}>
              You will receive an automated email containing your package confirmation, required document checklist, and Nirbhay Chauhan's official UPI payment QR code.
            </p>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  required
                  type="email"
                  maxLength={254}
                  autoComplete="email"
                  placeholder="e.g. rahul@example.com"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
              </div>
            </div>

            {/* Consent checkbox */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "20px", fontSize: "0.85rem", color: "var(--body)", cursor: "pointer" }}>
              <input
                type="checkbox"
                required
                checked={contact.consent}
                onChange={(e) => setContact({ ...contact, consent: e.target.checked })}
                style={{ marginTop: "3px" }}
              />
              <span>
                I agree that DNIC may use these details to email my resume recommendation, document checklist, and payment instructions. See our <a href="/privacy-policy/" target="_blank" className="text-link">Privacy Policy</a>.
              </span>
            </label>

            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <input tabIndex={-1} autoComplete="off" name="website" />
            </div>

            {error && (
              <div style={{ marginTop: "20px", padding: "14px 18px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: "var(--radius-sm)", color: "#991B1B", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "32px", flexWrap: "wrap", gap: "14px" }}>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setStep(4)}
              >
                ← Edit Answers
              </button>

              <button
                type="submit"
                className="button button-primary"
                disabled={pending}
              >
                {pending ? "Sending Enquiry..." : "Send My Resume Enquiry ↗"}
              </button>
            </div>
          </form>

          <p style={{ fontSize: "0.82rem", color: "var(--body-muted)", textAlign: "center", marginTop: "24px" }}>
            Note: Resume crafting begins after you send your documents and payment is verified manually by Nirbhay Chauhan.
          </p>
        </div>
      )}
    </div>
  );
}
