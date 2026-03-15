import type { Metadata } from "next";
import Navbar from "../components/Navbar"; // Adjust path if your components folder is inside 'app'
import "./globals.css";

export const metadata: Metadata = {
  title: "NIKE | AIR JORDAN 13",
  description: "Showcasing high-fidelity UI and GSAP animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {/* The Navbar stays fixed across all pages */}
        <Navbar />

        {/* The specific page content (like your Hero) loads inside here */}
        {children}
      </body>
    </html>
  );
}
