import LandingCollection from "../../components/LandingCollection";

export const metadata = {
  title: "Developer Interview Books | 6 Titles by Nirbhay Chauhan",
  description:
    "Explore six focused technical interview preparation books across .NET, C#, ASP.NET Core, Azure cloud, and front-end engineering by Nirbhay Chauhan.",
};

export default function DeveloperLandingPage() {
  return (
    <LandingCollection
      category="developer"
      eyebrow="DNIC / DEVELOPER COLLECTION"
      title="Prepare for Your Next Technical Conversation."
      subtitle="Explore six focused titles across .NET runtime internals, C# language features, ASP.NET Core APIs, Azure cloud architecture, and front-end engineering."
      countText="6 Published Engineering Titles"
      heroMockup={{
        src: "/images/mockups/three-books-transparent.png",
        alt: "Flagship Developer Trilogy — Conquer Azure, Mastering .NET Core, The Complete Front-End",
        isTransparent: true,
        maxHeight: "380px",
      }}
      infographic={{
        src: "/images/infographics/developer-interview.jpeg",
        alt: "Developer Interview Preparation Curriculum Architecture",
        badge: "C#, .NET, ASP.NET Core & Azure Technical Architecture",
        caption: "Structured roadmap from language fundamentals to cloud scaling and real-world system architecture.",
      }}
      bundleSpotlight={{
        eyebrow: "FOUNDATION STARTER BUNDLE",
        title: "Master .NET Fundamentals & Modern C# Preparation",
        desc: "Begin your interview journey with the two foundational volumes covering core CLR runtime internals, memory management, garbage collection, and modern C# pattern matching.",
        bullets: [
          ".NET CLR internals, JIT compilation & GC generations 0, 1, 2",
          "Modern C# syntax, records, async/await, and LINQ internals",
          "50+ scenario-based screening questions asked by top tech firms",
        ],
        mockupSrc: "/images/mockups/master-dotnet-csharp.png",
        isTransparent: false,
        ctaText: "Get the Foundations Bundle on Amazon ↗",
      }}
    />
  );
}
