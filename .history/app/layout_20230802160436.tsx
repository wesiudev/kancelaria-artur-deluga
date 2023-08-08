import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kancelaria Radcy Prawnego Artur Deluga",
  description:
    "Kancelaria Radcy Prawnego Grudziądz Prawo Karne, Pracwo cywilne, Prawo gospodarcze, Prawo Rodzinne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
