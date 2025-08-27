"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3 border border-gray-300 rounded space-y-3">
      <h2>Count: {count}</h2>

      <button
        className="bg-red-500 px-3 py-2 rounded text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
