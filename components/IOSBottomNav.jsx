"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, FileText, Video, Mail } from "lucide-react";

export default function IOSBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Books",
      href: "/books/",
      icon: BookOpen,
      isActive:
        pathname.startsWith("/books") ||
        pathname.startsWith("/developer-interview-books") ||
        pathname.startsWith("/qa-interview-books"),
    },
    {
      label: "Resume",
      href: "/resume-writing/",
      icon: FileText,
      isActive: pathname.startsWith("/resume-writing"),
    },
    {
      label: "Videos",
      href: "/learning-hub/",
      icon: Video,
      isActive: pathname.startsWith("/learning-hub") || pathname.startsWith("/videos"),
    },
    {
      label: "Contact",
      href: "/contact/",
      icon: Mail,
      isActive: pathname.startsWith("/contact"),
    },
  ];

  return (
    <nav className="ios-bottom-bar" aria-label="Mobile Navigation">
      <div className="ios-bottom-bar-inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`ios-tab-item ${item.isActive ? "active" : ""}`}
              aria-current={item.isActive ? "page" : undefined}
            >
              <div className="ios-tab-icon-wrapper">
                <Icon size={21} strokeWidth={item.isActive ? 2.5 : 1.9} />
                {item.isActive && <span className="ios-tab-indicator-dot" />}
              </div>
              <span className="ios-tab-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
