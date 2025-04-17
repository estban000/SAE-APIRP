import React from "react";

export default function FullButton({ title, action, border }) {
  return (
    <button
      className={`w-full py-4 px-6 rounded-lg transition-all duration-300 ${
        border
          ? "border-2 border-[#7b151a] text-[#7b151a] bg-transparent hover:bg-[#7b151a] hover:text-white"
          : "bg-[#CD212A] text-white hover:bg-[#7b151a] hover:border-[#7b151a]"
      }`}
      onClick={action ? () => action() : null}
    >
      {title}
    </button>
  );
}
