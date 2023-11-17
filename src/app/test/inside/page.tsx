"use client";
import { useState } from "react";
import testData from "./data";
const Inside = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {testData}
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
export default Inside;
