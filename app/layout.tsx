import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "reddy x 247 | Elite Game Hosting",
  description: "Premium Minecraft, VPS, and Bot Hosting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
