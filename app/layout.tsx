import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./_components/atoms/SmoothScroll";

export const metadata: Metadata = {
  title: "Sarah De Witt",
  description:
    "Sarah De Witt is a design-oriented Front-End Developer speacializing in creating visually appealing interfaces and engaging user experiences.",
  openGraph: {
    title: "Sarah De Witt",
    description:
      "Sarah De Witt is a design-oriented Front-End Developer speacializing in creating visually appealing interfaces and engaging user experiences.",
    url: "https://sarahdewitt.github.io/",
  },
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="-z-[999] md:relative">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
