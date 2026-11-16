import { site } from "../../lib/site";
import { books } from "../../lib/books";
import Link from "next/link";
import { Video, ExternalLink, ArrowRight, Play, BookOpen } from "lucide-react";
import { YouTubeIcon } from "../../components/Icons";

export const metadata = {
  title: "Learning Hub — Videos & Tutorials | Dot Net Interview Community",
  description:
    "Watch practical video tutorials, technical interview breakdowns, and conceptual walkthroughs on the Dot Net Interview Community YouTube channel.",
};

const tutorialVideos = [
  {
    title: "C# Async/Await State Machines Under the Hood",
    topic: "C# Concurrency",
    duration: "22 mins",
    desc: "A visual walkthrough of how the C# compiler transforms async methods into state machine structs, avoiding deadlocks in production.",
    url: site.youtube,
  },
  {
    title: "ASP.NET Core Middleware Pipeline Architecture",
    topic: "ASP.NET Core",
    duration: "19 mins",
    desc: "Understanding request flow, short-circuiting, custom middleware execution order, and exception-handling best practices.",
    url: site.youtube,
  },
  {
    title: "Azure Managed Identity: Zero Secrets in Cloud Apps",
    topic: "Azure Cloud",
    duration: "17 mins",
    desc: "How token acquisition works between Azure App Services, Key Vault, and Azure SQL without storing connection passwords in code.",
    url: site.youtube,
  },
  {
    title: "Garbage Collection Generations 0, 1, 2 Explained with Diagrams",
    topic: ".NET Runtime",
    duration: "14 mins",
    desc: "How the .NET runtime allocates memory, triggers GC cycles, manages the Large Object Heap (LOH), and reduces GC latency.",
    url: site.youtube,
  },
  {
    title: "Page Object Model (POM) in C# / .NET from Scratch",
    topic: "QA Automation",
    duration: "26 mins",
    desc: "Building a scalable, maintainable test automation framework with Selenium WebDriver and Playwright in modern C#.",
    url: site.youtube,
  },
  {
    title: "Top 20 Software Testing Interview Questions and Answers",
    topic: "QA Testing",
    duration: "25 mins",
    desc: "Model answers and reasoning for the most common scenario-based software testing and defect lifecycle interview questions.",
    url: site.youtube,
  },
];

export default function LearningHubPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">
            <Video size={14} /> VIDEOS & TUTORIALS
          </span>
          <h1>Watch. Learn. Improve.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Visual lessons, live architecture walkthroughs, and practical interview questions from the Dot Net Interview Community YouTube channel.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              <YouTubeIcon size={18} /> Subscribe on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      {/* Featured Architecture Infographic */}
      <section className="section" style={{ paddingTop: "20px", paddingBottom: "36px" }}>
        <div className="shell">
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              background: "#FFFFFF",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                background: "var(--bg-subtle)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--body-muted)", marginLeft: "8px" }}>
                  Watch, Learn, Improve — Tech Architecture Breakdown
                </span>
              </div>
              <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>
                System Architecture Deep-Dive
              </span>
            </div>
            <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
              <img
                src="/images/infographics/watch-learn-architecture.jpeg"
                alt="Watch, Learn, Improve: Tech Architecture"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section">
        <div className="shell">
          <div className="section-header">
            <span className="eyebrow">FEATURED LESSONS</span>
            <h2>Practical Interview Concepts Explained Visually.</h2>
            <p>Every video expands upon technical subjects covered in our published interview books.</p>
          </div>

          <div className="videos-grid">
            {tutorialVideos.map((v, i) => (
              <div key={i} className="video-card">
                <div className="video-thumb">
                  <div className="video-play-btn">
                    <Play size={20} style={{ marginLeft: "3px" }} />
                  </div>
                  <span className="video-duration">{v.duration}</span>
                </div>
                <div className="video-info">
                  <span className="badge badge-teal" style={{ marginBottom: "8px", width: "fit-content" }}>
                    {v.topic}
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary button-sm"
                    style={{ marginTop: "auto" }}
                  >
                    Watch Lesson on YouTube <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Link to Books with 3-Book Bundle Mockup */}
      <section className="section section-subtle">
        <div className="shell">
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "40px 36px",
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              alignItems: "center",
              gap: "36px",
              boxShadow: "var(--shadow-sm)",
            }}
            className="bundle-spotlight-card"
          >
            <div>
              <span className="badge badge-teal" style={{ marginBottom: "12px", display: "inline-block" }}>
                PAIRED INTERVIEW READING
              </span>
              <h2 style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.2rem)", margin: "4px 0 14px", lineHeight: 1.25 }}>
                Prefer Structured Reading Alongside Videos?
              </h2>
              <p style={{ color: "var(--body)", maxWidth: "560px", marginBottom: "24px", lineHeight: 1.65 }}>
                Explore the complete collection of 8 published books by Nirbhay Chauhan covering .NET, C#, Azure, and QA testing. Every video tutorial maps directly to in-depth chapters and interview scenarios.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/books/" className="button button-primary">
                  Explore the 8 Books <ArrowRight size={16} />
                </Link>
                <Link href="/resume-writing/get-started/" className="button button-secondary">
                  Build My Resume
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/mockups/dotnet-interview-bundle.png"
                alt=".NET Interview Book Bundle — Master C#, Master .NET Fundamentals, .NET Developer's Interview Toolkit"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                  borderRadius: "14px",
                  boxShadow: "var(--shadow-md)",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
