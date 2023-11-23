"use client";
import { hasCookie, deleteCookie, setCookie } from "cookies-next";
// import { cookies } from "next/headers";
import React, { useEffect } from "react";

const DarkMode = () => {
  useEffect(() => {
    document.cookie = "darkMode=true; max-age=" + 3600 * 24 * 400;
  }, []);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        // const darkMode = hasCookie("darkMode");

        // darkMode ? deleteCookie("darkMode") : setCookie("darkMode", "true");
        let cookies = ("; " + document.cookie)
          .split(`; darkMode=`)
          .pop()
          ?.split(";")[0];

        if (cookies == "") {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        }
      }}
    >
      DarkMode!
    </button>
  );
};
export default DarkMode;
