import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import RevealScript from "../components/Reveal";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Naseem Ghamari",
  description: "Software & Computer Engineer Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* font preconnects & stylesheet */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        {/* FontAwesome CDN for legacy <i> classes */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnH1z0XcZGG3ZLkQ6PH6F5x1jV6QRv2IjQ0eOBsUJ5ZKq5F5pIo4Xo5cu2c0H4vqfu6F0z5dA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* FontAwesome handled by config import */}
      </head>
      <body>
        <RevealScript />
        {children}
      </body>
    </html>
  );
}