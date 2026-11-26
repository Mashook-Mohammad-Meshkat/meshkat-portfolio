import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mashook Mohammad Meshkat | Data & Analytics",
  description: "Portfolio of Mashook Mohammad Meshkat — Data Analyst, Analytics Engineer and Data Scientist.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mashook Mohammad Meshkat | Data & Analytics",
    description: "Engineering data. Discovering insights. Driving impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
