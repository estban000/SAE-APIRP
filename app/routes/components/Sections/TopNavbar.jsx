import React, { useEffect, useState } from "react";

// Components
import Sidebar from "./Sidebar";
import Backdrop from "../../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);

  // Assurez-vous que 'window' est défini avant d'ajouter l'événement de défilement
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Notez que l'effet ne dépend de rien d'autre

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 ${y > 100 ? 'h-[60px]' : 'h-[80px]'} bg-white`}>
        <div className="container flex justify-between items-center">
          <a href="/Accueil" className="flex items-center">
            <LogoIcon />
          </a>
          <button
            className="lg:hidden p-4"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </button>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <a href="/Accueil" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Accueil</a>
            </li>
            <li>
              <a href="/Forum" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Forum</a>
            </li>
            <li>
              <a href="/Activités" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Activités</a>
            </li>
            <li>
              <a href="/Contact" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Nous connaître</a>
            </li>
            <li>
              <a href="/Adherer" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Adhérer</a>
            </li>
            <li>
              <a href="/Promouvoir" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Promouvoir</a>
            </li>
            <li>
              <a href="/Apprendre" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Apprendre</a>
            </li>
            <li>
              <a href="/Enseigner" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Enseigner</a>
            </li>
            <li>
              <a href="/Divers" className="font-semibold text-sm px-4 py-2 hover:bg-gray-200 rounded-md">Divers</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
