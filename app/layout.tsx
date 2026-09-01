import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";

export const metadata: Metadata = {
  title: "Laksam Local Service | Trusted Services in Laksam",
  description: "Find trusted electricians, plumbers, AC technicians, tutors and more around Laksam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
