import React from "react";

// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav
      className={`fixed top-0 right-0 w-[400px] h-screen bg-darkBg transition-all duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-[400px]"
      } p-8 z-50`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <LogoIcon />
        </div>
        <button
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="p-2 bg-transparent outline-none border-0"
        >
          <CloseIcon />
        </button>
      </div>

      <ul className="flex flex-col space-y-5 mt-10">
        <li>
          <a
            href="/Accueil"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="/Forum"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="/Activités"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Activités
          </a>
        </li>
        <li>
          <a
            href="/Contact"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Nous connaître
          </a>
        </li>
        <li>
          <a
            href="/Adherer"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Adhérer
          </a>
        </li>
        <li>
          <a
            href="/Promouvoir"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Promouvoir
          </a>
        </li>
        <li>
          <a
            href="/Apprendre"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Apprendre
          </a>
        </li>
        <li>
          <a
            href="/Enseigner"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Enseigner
          </a>
        </li>
        <li>
          <a
            href="/Divers"
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="font-semibold text-sm px-6 py-3 block hover:bg-gray-200 rounded-md"
          >
            Divers
          </a>
        </li>
      </ul>
    </nav>
  );
}
