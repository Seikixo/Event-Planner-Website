import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BeYOUtiful Life Events | Creating Beautiful Life Moments",
  description:
    "Curating intimate gatherings and grand celebrations with intentional design, transforming your most cherished milestones into timeless memories.",
};

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-headline",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="bg-background text-on-surface font-body antialiased selection:bg-primary-container selection:text-on-primary-container">
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
