import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingBackButton from "@/components/FloatingBackButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Single Page Layout",
  description: "A geometric single-page website layout built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        {children}
        <FloatingBackButton />
      </div>
    </div>
  );
}


