import React from "react";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <div className="w-full mt-8">
      <button
        className="w-full p-0 m-0 bg-transparent hover:opacity-50"
        onClick={action ? () => action() : null}
      >
        <img className="w-full h-auto rounded-lg" src={img} alt="project" />
      </button>
      <h3 className="text-xl font-extrabold pb-2">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
}
