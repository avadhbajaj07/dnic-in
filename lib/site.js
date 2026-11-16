export const site = {
  name: "Dot Net Interview Community",
  shortName: "DNIC",
  domain: "dnic.in",
  url: "https://dnic.in",
  tagline: "Your Community for Technical Interview Success",
  description: "Discover expert-written interview preparation books, practical video lessons, and career-focused resume services from Dot Net Interview Community.",
  author: "Nirbhay Chauhan",
  authorBio: "Author, software developer, and interview coach with years of engineering experience across modern .NET, cloud architecture, and QA automation.",
  authorRole: "Author, Interview Coach & Founder of DNIC",
  email: "hello@dnic.in",
  supportEmail: "hello@dnic.in",
  amazonAuthor: "https://www.amazon.in/stores/Nirbhay-Chauhan/author/B0DV5KTJCF",
  youtube: "https://www.youtube.com/@DotNetInterviewCommunity",
  linkedin: "https://www.linkedin.com/company/dot-net-interview-community/",
  instagram: "https://www.instagram.com/dotnet_interview_community/",
  facebook: "https://www.facebook.com/DotNetInterviewCommunity/",
};

export const packages = [
  {
    id: "starter",
    name: "Career Starter",
    price: 1000,
    experience: "0–1 year",
    target: "Students, freshers, and entry-level candidates",
    blurb: "Built to get past initial screening and showcase fundamentals with impact.",
    features: [
      "ATS-friendly single-page technical layout",
      "Academic projects & core skills highlighting",
      "Interview-aligned objective & technical summary",
      "Turnaround in 2–3 working days",
      "Direct revision support via email"
    ],
    items: [
      "ATS-friendly single-page technical layout",
      "Academic projects & core skills highlighting",
      "Interview-aligned summary & positioning"
    ]
  },
  {
    id: "growth",
    name: "Career Growth",
    price: 2000,
    experience: "2–5 years",
    target: "Working developers & QA professionals",
    blurb: "Position your mid-level experience with measurable outcomes, system ownership, and technical depth.",
    isPopular: true,
    features: [
      "Quantifiable achievements & project metrics",
      "Tech stack, API, and architectural alignment",
      "Tailored for mid-level & senior engineering roles",
      "Turnaround in 2–3 working days",
      "Multi-round revision support via email"
    ],
    items: [
      "Quantifiable achievements & project metrics",
      "Tech stack & system design alignment",
      "Role-specific tailoring & keywords"
    ]
  },
  {
    id: "leadership",
    name: "Career Leadership",
    price: 3000,
    experience: "6+ years",
    target: "Tech leads, architects, and engineering managers",
    blurb: "Make architectural ownership, leadership impact, and executive presence stand out immediately.",
    features: [
      "High-scale system architecture & delivery impact",
      "Team mentorship, hiring, and strategic leadership",
      "Executive summary & high-impact positioning",
      "Turnaround in 2–3 working days",
      "Priority revision rounds & direct consultation"
    ],
    items: [
      "Architectural leadership & team impact",
      "Executive summary & high-scale delivery",
      "Strategic positioning & direct consultation"
    ]
  }
];

export function recommendedPackage(careerStage, experience, targetRole) {
  if (targetRole === "Leadership / Management" || targetRole?.includes("Lead") || targetRole?.includes("Architect")) {
    return packages[2];
  }
  if (["6–10 years", "10+ years"].includes(experience)) {
    return packages[2];
  }
  if (experience === "2–5 years") {
    return packages[1];
  }
  return packages[0];
}

export const money = (price) => `₹${price.toLocaleString("en-IN")}`;
