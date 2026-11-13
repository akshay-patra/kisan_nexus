import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kisan Nexus",
  description:
    "Kisan Nexus connects fragmented farm supply with real demand through forecasting, aggregation, intelligent matching and optimized logistics.",
  category: "Demand driven farmer to buyer commerce",
  icons: {
    icon: "/kisan_nexus_logo_transparent.png",
  },
  other: {
    tagline: "Demand driven farmer to buyer commerce",
    subtitle: "Demand driven farmer to buyer commerce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}