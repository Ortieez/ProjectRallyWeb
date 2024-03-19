import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const daggerFont = localFont({
  src: [
    {
      path: "../fonts/DAGGERSQUARE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/DAGGERSQUARE OBLIQUE.otf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Project Rally",
  description: "Project Rally is a low poly student made game in Unity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${daggerFont.className} bg-primary`}>{children}</body>
    </html>
  );
}
