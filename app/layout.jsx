import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../lib/site";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://purple-skunk-231017.hostingersite.com";

export const metadata = {
  metadataBase: new URL(base),
  title: {
    default: "DNIC — Dot Net Interview Community | .NET, C# & Azure Books",
    template: "%s | DNIC",
  },
  description: site.description,
  keywords: [
    ".NET interview questions",
    "C# interview preparation",
    "ASP.NET Core interview",
    "Azure developer interview",
    "QA interview questions",
    "Software testing book",
    "Nirbhay Chauhan",
    "Dot Net Interview Community",
    "technical resume writing",
  ],
  authors: [{ name: site.author, url: site.amazonAuthor }],
  creator: site.author,
  publisher: site.name,
  openGraph: {
    title: "DNIC — Dot Net Interview Community",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: process.env.NEXT_PUBLIC_INDEX_LIVE === "true",
    follow: process.env.NEXT_PUBLIC_INDEX_LIVE === "true",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://dnic.in/#organization",
        name: site.name,
        alternateName: site.shortName,
        url: "https://dnic.in",
        logo: "https://dnic.in/favicon.svg",
        founder: {
          "@type": "Person",
          name: site.author,
          jobTitle: site.authorRole,
          url: site.amazonAuthor,
        },
        sameAs: [
          site.youtube,
          site.linkedin,
          site.instagram,
          site.facebook,
          site.amazonAuthor,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://dnic.in/#website",
        url: "https://dnic.in",
        name: site.name,
        publisher: { "@id": "https://dnic.in/#organization" },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
