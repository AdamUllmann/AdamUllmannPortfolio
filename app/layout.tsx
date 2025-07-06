import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
export const metadata: Metadata = {
  title: "Adam Ullmann Portfolio",
  description: "Portfolio site",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Production */}
        <Script
          type="module"
          //src="https://"
        />

        {/* Development */}
        {/* <Script type="module" src={`http://localhost:8083/?${Math.random()}`} /> */}
      </head>
      <body className="">{children}</body>
    </html>
  );
}
