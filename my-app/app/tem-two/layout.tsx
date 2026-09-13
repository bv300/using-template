import type { Metadata } from "next";
import Header from "@/components/tem-two/layout/Header";
import Footer from "@/components/tem-two/layout/Footer";
import LoadingScreen from "@/components/tem-two/LoadingScreen";
import FloatingBackButton from "@/components/FloatingBackButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "TERRA | Biophilic Architecture",
  description:
    "Regenerative timber architecture and living interior ecosystems for a healthier planet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingBackButton />
      </div>
    </div>
  );
}


