"use client";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React from "react";

const DarkMode = () => {
  let router = useRouter();
  //TODO: refresh 없이 상태 바뀌게 변경
  return (
    <button
      onClick={(e) => {
        e.preventDefault();

        const cookies = ("; " + document.cookie)
          .split(`; darkMode=`)
          .pop()
          ?.split(";")[0];
        console.log(cookies + "cookie");
        cookies
          ? deleteCookie("darkMode")
          : (document.cookie = "darkMode=true; max-age=" + 3600 * 24 * 400);

        router.refresh();
      }}
    >
      DarkMode!
    </button>
  );
};
export default DarkMode;
