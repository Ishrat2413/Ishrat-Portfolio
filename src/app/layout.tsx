import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "MST. Ishrat Jahan Rintu | Full Stack Developer",
  description:
    "Portfolio of MST. Ishrat Jahan Rintu, Full Stack Developer focused on scalable web products and AI-enabled applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-body)]`}>
        <Navigation />
        <div className='pt-16'>{children}</div>
      </body>
    </html>
  );
}
