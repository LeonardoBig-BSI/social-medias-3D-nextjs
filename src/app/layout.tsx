import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.scss";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Medias 3D - Next.js",
  description: "Social Medias 3D - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
