import { site } from "../../lib/site";
import Link from "next/link";
import { BookOpen, ArrowUpRight, ArrowRight, MessageSquare, Users } from "lucide-react";
import { YouTubeIcon, LinkedInIcon, InstagramIcon, FacebookIcon } from "../../components/Icons";

export const metadata = {
  title: "Community | Dot Net Interview Community",
  description:
    "Join the Dot Net Interview Community across YouTube, LinkedIn, Instagram, and Facebook. Prepare for technical interviews together.",
};

const channels = [
  {
    name: "YouTube Channel",
    handle: "@DotNetInterviewCommunity",
    url: site.youtube,
    icon: <YouTubeIcon size={36} />,
    badge: "VIDEO LESSONS",
    desc: "Weekly conceptual deep-dives, live code reviews, and interview question breakdowns directly from author Nirbhay Chauhan.",
    cta: "Subscribe on YouTube",
  },
  {
    name: "LinkedIn Network",
    handle: "dot-net-interview-community",
    url: site.linkedin,
    icon: <LinkedInIcon size={36} />,
    badge: "PROFESSIONAL NETWORK",
    desc: "Connect with fellow developers, share interview experiences, read technical articles, and discuss career openings.",
    cta: "Connect on LinkedIn",
  },
  {
    name: "Instagram Community",
    handle: "@dotnet_interview_community",
    url: site.instagram,
    icon: <InstagramIcon size={36} />,
    badge: "DAILY TIPS & REELS",
    desc: "Bite-sized C# code quizzes, daily interview tips, and behind-the-scenes updates from Nirbhay.",
    cta: "Follow on Instagram",
  },
  {
    name: "Facebook Group",
    handle: "DotNetInterviewCommunity",
    url: site.facebook,
    icon: <FacebookIcon size={36} />,
    badge: "DISCUSSION GROUP",
    desc: "Group study discussions, event notifications, peer support, and resources for interview preparation.",
    cta: "Join on Facebook",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="section section-mint" style={{ padding: "64px 0" }}>
        <div className="shell text-center" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="eyebrow">
            <Users size={14} /> CONNECT & GROW
          </span>
          <h1>You Don’t Have to Prepare Alone.</h1>
          <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "#374151" }}>
            Join a growing community sharing questions, technical discussions, and encouragement. Follow us across our official social channels or share your interview experience.
          </p>
        </div>
      </section>

      {/* Social Channels Grid */}
      <section className="section">
        <div className="shell">
          <div className="features-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            {channels.map((c, i) => (
              <div key={i} className="feature-card">
                <div style={{ marginBottom: "16px" }}>{c.icon}</div>
                <span className="badge badge-teal" style={{ marginBottom: "10px", width: "fit-content" }}>
                  {c.badge}
                </span>
                <h3>{c.name}</h3>
                <span style={{ fontSize: "0.82rem", color: "var(--body-muted)", display: "block", marginBottom: "12px" }}>
                  {c.handle}
                </span>
                <p>{c.desc}</p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary button-sm"
                  style={{ marginTop: "auto" }}
                >
                  {c.cta} <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* Connect With DNIC Infographic */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "56px auto 0",
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
                  The Dot Net Interview Community Ecosystem
                </span>
              </div>
              <span className="badge badge-teal" style={{ fontSize: "0.75rem" }}>
                Multi-Platform Community
              </span>
            </div>
            <div style={{ position: "relative", width: "100%", lineHeight: 0, backgroundColor: "#FAFAFA" }}>
              <img
                src="/images/infographics/connect-dnic.jpeg"
                alt="Connect With DNIC Infographic"
                style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
                loading="eager"
              />
            </div>
          </div>

          {/* Share Your Story Callout Box */}
          <div
            style={{
              maxWidth: "880px",
              margin: "56px auto 0",
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <span className="badge badge-blue" style={{ marginBottom: "8px" }}>
                COMMUNITY CONTRIBUTION
              </span>
              <h3 style={{ fontSize: "1.5rem", margin: "4px 0 8px" }}>
                Share Your Recent Interview Questions
              </h3>
              <p style={{ color: "var(--body)", maxWidth: "540px", margin: 0 }}>
                Have you recently appeared for a .NET, C#, Azure, or QA technical round? Help your fellow candidates by sending in the questions you faced.
              </p>
            </div>

            <Link href="/contact/" className="button button-primary">
              Submit Questions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
