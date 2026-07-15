import type { Metadata } from "next";
import { Barlow_Condensed, Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--ff-display",
  display: "swap",
});

const sans = Roboto_Flex({
  subsets: ["latin"],
  variable: "--ff-sans",
  display: "swap",
});

const mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ff-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About · ASAP Aerospace & Defense",
  description:
    "About ASAP Aerospace & Defense — an independent parts distributor since 2009. Our story, mission, values, leadership and accreditations (AS9120:2015, ISO 9001:2015, FAA AC 00-56B).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
