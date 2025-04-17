import React from "react";

export default function Backdrop({ toggleSidebar }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-99"
      onClick={() => toggleSidebar(false)}
    ></div>
  );
}
