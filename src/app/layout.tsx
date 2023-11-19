import type { Metadata } from "next";
import React from "react";
import "./globals.css";

import DarkMode from "./components/DarkMode";
import { hasCookie } from "cookies-next";

export const metadata: Metadata = {
  title: "Devv",
  description: "Hitzza portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let darkMode = hasCookie("DarkMode");
  return (
    <html lang="en">
      <body className={darkMode ? "dark-mode" : ""}>
        <nav>
          <ul>
            <li className={darkMode ? "dark-mode" : ""}>1</li>
            <li>
              <DarkMode />
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
