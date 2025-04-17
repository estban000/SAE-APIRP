import React from "react";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <div className="w-full">
      <div className="darkBg">
        <div className="container">
          <div className="flex justify-between items-center py-8 md:flex-col">
            <Link className="flex items-center animate-pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="text-lg font-extrabold ml-4">
                APIRP
              </h1>
            </Link>
            <p className="text-sm md:mt-5">
              © {getCurrentYear()} - <span className="text-red-800">Rosalie & Ornella</span> - No Right Reserved
            </p>

            <Link className="animate-pointer text-sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
