import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarah De Witt",
  description: "Sarah De Witt is a design-oriented Front-End Developer speacializing in creating visually appealing interfaces and engaging user experiences.",
  openGraph: {
    title: "Sarah De Witt",
    description: "Sarah De Witt is a design-oriented Front-End Developer speacializing in creating visually appealing interfaces and engaging user experiences.",
    url: 'https://sarahdewitt.github.io/'
  }
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
