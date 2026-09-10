import type { Metadata } from "next";
import "./globals.css";

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
      <div>{children}</div>
    </div>
  );
}


