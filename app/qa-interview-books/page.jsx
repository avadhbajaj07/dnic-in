import LandingCollection from "../../components/LandingCollection";

export const metadata = {
  title: "QA & Testing Interview Books | Software Testing Preparation",
  description:
    "Explore two software testing and QA interview preparation titles by Nirbhay Chauhan covering STLC, test design, API testing, and SDET automation frameworks.",
};

export default function QALandingPage() {
  return (
    <LandingCollection
      category="qa"
      eyebrow="DNIC / QUALITY COLLECTION"
      title="Better Preparation. Stronger QA Conversations."
      subtitle="Two focused books for software testing, quality assurance, and SDET interview preparation. From fundamental STLC scenarios to advanced automation frameworks."
      countText="2 Published QA & Testing Titles"
      heroMockup={{
        src: "/images/mockups/elegant-qa-mockup.png",
        alt: "Software Testing Interview Secrets & The Advanced QA Interview Handbook on Executive Desk",
        isTransparent: false,
        maxHeight: "360px",
      }}
      infographic={{
        src: "/images/infographics/qa-testing.jpeg",
        alt: "Software Testing & QA Interview Preparation Roadmap",
        badge: "Manual, Automation, API & Performance Testing Architecture",
        caption: "Comprehensive testing roadmap covering STLC, test design, Selenium/Playwright frameworks, and API automation.",
      }}
      bundleSpotlight={{
        eyebrow: "COMPLETE QA & SDET DUO",
        title: "Software Testing Secrets + Advanced QA Handbook",
        desc: "From manual STLC and test case design to advanced Selenium, Playwright, and REST API automation frameworks. Everything you need to clear Senior QA and SDET rounds.",
        bullets: [
          "Complete STLC, Agile defect lifecycle & real-world test planning",
          "Page Object Model (POM) in C# with Playwright & Selenium",
          "API testing with Postman/RestSharp & performance profiling",
        ],
        mockupSrc: "/images/mockups/floating-qa-mockup.png",
        isTransparent: false,
        ctaText: "Order the 2-Book QA Bundle on Amazon ↗",
      }}
    />
  );
}
