"use client";
import { hasCookie, deleteCookie, setCookie } from "cookies-next";
import React from "react";

const DarkMode = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        const darkMode = hasCookie("DarkMode");
        darkMode ? deleteCookie("DarkMode") : setCookie("DarkMode", "true");
      }}
    >
      DarkMode!
    </button>
  );
};
export default DarkMode;
