import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Noto_Sans,
  Poppins,
} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// const notoSans = Noto_Sans({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
// const montserrat = Montserrat({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <title>Hult at ACEM</title>
      </head>

      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
