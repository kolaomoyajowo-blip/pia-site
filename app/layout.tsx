import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Privacy Intelligence Academy",
  description:
    "Practical training for lawyers, compliance teams, and founders on turning privacy data into decisions.",
  metadataBase: new URL("https://www.privacyintelligenceacademy.org"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 mx-auto max-w-5xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
