import type { Metadata } from "next";
import { cookies } from "next/headers";
import React from "react";
import "./globals.css";

import DarkMode from "./components/DarkMode";

export const metadata: Metadata = {
  title: "Devv",
  description: "Hitzza portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let test = cookies().get("darkMode");
  return (
    <html lang="en">
      <body className={test ? "dark-mode" : ""}>
        <nav>
          <ul>
            <li>1</li>
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
