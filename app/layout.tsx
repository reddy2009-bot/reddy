import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "reddy x 247 | Elite Game Hosting",
  description: "Premium Minecraft, VPS, and Bot Hosting for legends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}