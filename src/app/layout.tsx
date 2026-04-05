import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Girish Negi — Automation Engineer & Web Developer",
  description:
    "Portfolio of Girish Negi — Automation Engineer, Web Developer, AI Tools Expert, and Security & Server Specialist. Building digital experiences with precision.",
  keywords: [
    "Girish Negi",
    "Automation Engineer",
    "Web Developer",
    "AI Tools Expert",
    "Security Specialist",
    "Portfolio",
  ],
  openGraph: {
    title: "Girish Negi — Automation Engineer & Web Developer",
    description:
      "Building digital experiences with precision. Automation, Web Development, AI, and Security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
