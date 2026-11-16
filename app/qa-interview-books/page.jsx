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
      infographic={{
        src: "/images/infographics/qa-testing.jpeg",
        alt: "Software Testing & QA Interview Preparation Roadmap",
        badge: "Manual, Automation, API & Performance Testing Architecture",
        caption: "Comprehensive testing roadmap covering STLC, test design, Selenium/Playwright frameworks, and API automation.",
      }}
    />
  );
}
