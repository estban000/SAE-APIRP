import React from "react";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button
      className="animate pointer bg-transparent hover:opacity-50"
      onClick={action ? () => action() : null}
    >
      <div className="whiteBg rounded-lg shadow p-6 mt-8 text-left">
        <h3 className="text-xl font-extrabold text-dark">{title}</h3>
        <p className="text-sm py-7">{text}</p>
        <p className="text-sm font-extrabold">{author}</p>
        <div className="flex">
          <p className="tag bg-coral rounded-full text-sm font-extrabold px-3 py-1">{tag}</p>
        </div>
      </div>
    </button>
  );
}
