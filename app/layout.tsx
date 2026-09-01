import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laksam Local Service",
  description: "Find trusted local service providers in Laksam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
