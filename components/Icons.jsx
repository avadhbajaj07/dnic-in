export function YouTubeIcon({ size = 20, color = "#EF4444", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={color} />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, color = "#0077B5", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, color = "#E4405F", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, color = "#1877F2", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function AmazonIcon({ size = 20, color = "#FF9900", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16c-3.5 2.5-9.5 3.5-14.5.5-2.2-1.3-4-3-4.5-3.5" />
      <path d="M17.5 14.5c.8.6 2 1.5 3.5 1.5-1 .5-2 1.5-2 3" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Official Corporate Brand Logos for Success Cases & Top Engineers
export function MicrosoftLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 96 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <rect x="0" y="2.5" width="7.5" height="7.5" fill="#F25022" />
      <rect x="9" y="2.5" width="7.5" height="7.5" fill="#7FBA00" />
      <rect x="0" y="11.5" width="7.5" height="7.5" fill="#00A4EF" />
      <rect x="9" y="11.5" width="7.5" height="7.5" fill="#FFB900" />
      <text x="22" y="16" fontFamily="Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="600" fontSize="13.5" fill="#2F2F2F" letterSpacing="-0.2px">
        Microsoft
      </text>
    </svg>
  );
}

export function GoogleLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 86 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <g transform="translate(0, 2)">
        <path d="M9 7.4v3.3h4.8c-.2 1.1-.9 2.1-1.8 2.7l3 2.3c1.7-1.6 2.7-3.9 2.7-6.7 0-.6-.1-1.3-.2-1.8H9z" fill="#4285F4" />
        <path d="M9 17.8c2.5 0 4.5-.8 6-2.2l-3-2.3c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.8v2.3C2.3 15.8 5.4 17.8 9 17.8z" fill="#34A853" />
        <path d="M3.9 10.4c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V4.7H.8C.3 5.7 0 6.8 0 8s.3 2.3.8 3.3l3.1-2.4v1.5z" fill="#FBBC05" />
        <path d="M9 3.5c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5 1 11.4.2 9 .2 5.4.2 2.3 2.2.8 5.2l3.1 2.4c.7-2.2 2.7-4.1 5.1-4.1z" fill="#EA4335" />
      </g>
      <text x="24" y="16" fontFamily="Product Sans, -apple-system, BlinkMacSystemFont, sans-serif" fontWeight="700" fontSize="14" fill="#374151" letterSpacing="-0.3px">
        Google
      </text>
    </svg>
  );
}

export function AmazonLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 88 24" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <text x="0" y="15" fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15" fill="#111827" letterSpacing="-0.4px">
        amazon
      </text>
      <path d="M10 18c8 4 25 3.5 36-3" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M44.5 14l3.5 1.2-2.2 2.8" fill="#FF9900" />
    </svg>
  );
}

export function CognizantLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 98 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="8" cy="11" r="7" fill="#0033A0" />
      <path d="M10.5 8.5L6 11l4.5 2.5" stroke="#00D2D2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="20" y="15.5" fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="13" fill="#0033A0" letterSpacing="-0.2px">
        cognizant
      </text>
    </svg>
  );
}

export function AccentureLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 96 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <text x="0" y="15.5" fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="13.5" fill="#111827" letterSpacing="-0.3px">
        accenture
      </text>
      <path d="M47 5.5l3.5 3.5-3.5 3.5" stroke="#A100FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function InfosysLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 76 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <text x="0" y="16" fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="15" fill="#007CC3" letterSpacing="-0.3px">
        Infosys
      </text>
    </svg>
  );
}

export function TCSLogo({ height = 20, className = "" }) {
  return (
    <svg height={height} viewBox="0 0 70 22" fill="none" className={className} style={{ display: "inline-block", verticalAlign: "middle" }}>
      <text x="0" y="16" fontFamily="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="17" fill="#0A2540" letterSpacing="-0.5px">
        tcs
      </text>
      <circle cx="42" cy="7.5" r="2.2" fill="#E65100" />
      <circle cx="48.5" cy="7.5" r="2.2" fill="#0288D1" />
      <circle cx="45.2" cy="13" r="2.2" fill="#7B1FA2" />
    </svg>
  );
}
