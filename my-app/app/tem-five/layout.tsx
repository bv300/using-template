import type { Metadata } from "next";
import "./globals.css";
import FloatingBackButton from "@/components/FloatingBackButton";

export const metadata: Metadata = {
  title: "Retro-Modern Electrical Shop",
  description: "Power the Unseen with our master electricians.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        {children}
        <FloatingBackButton />
      </div>
    </div>
  );
}


