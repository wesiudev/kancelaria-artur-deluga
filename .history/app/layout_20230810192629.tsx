import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kancelaria Radcy Prawnego Artur Deluga",
  description:
    "Kancelaria Radcy Prawnego Grudziądz Prawo Karne, Pracwo cywilne, Prawo gospodarcze, Prawo Rodzinne. ul. Kościelna 15-17/7 86-300 Grudziądz. Pomoc prawna na każdym etapie postępowania karnego (postępowanie przygotowawcze, obrona w postępowaniu sądowym, reprezentacja pokrzywdzonego, etc.)",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.png",
  },
  meta:
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
