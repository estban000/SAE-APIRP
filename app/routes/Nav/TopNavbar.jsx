import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import Sidebar from "./Nav/Sidebar";
import Backdrop from "./Elements/Backdrop";
// Assets
import LogoIcon from "./img/svg/Logo";
import BurgerIcon from "./img/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <a href="/Accueil" className="pointer flexNullCenter">
            <LogoIcon />
          </a>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/Accueil" style={{ padding: "10px 15px" }}>
                Accueil
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Forum" style={{ padding: "10px 15px" }}>
                Forum
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Activités" style={{ padding: "10px 15px" }}>
                Activités
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Contact"  style={{ padding: "10px 15px" }}>
                Nous connaître
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Adherer"  style={{ padding: "10px 15px" }}>
                Adhérer
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Promouvoir"  style={{ padding: "10px 15px" }}>
                Promouvoir
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Apprendre"  style={{ padding: "10px 15px" }}>
                Apprendre
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Enseigner"  style={{ padding: "10px 15px" }}>
                Enseigner
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Divers"  style={{ padding: "10px 15px" }}>
                Divers
              </a>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
