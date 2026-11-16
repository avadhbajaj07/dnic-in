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
      infographic={{
        src: "/images/infographics/developer-interview.jpeg",
        alt: "Developer Interview Preparation Curriculum Architecture",
        badge: "C#, .NET, ASP.NET Core & Azure Technical Architecture",
        caption: "Structured roadmap from language fundamentals to cloud scaling and real-world system architecture.",
      }}
    />
  );
}
