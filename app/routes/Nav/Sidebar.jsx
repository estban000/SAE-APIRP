import styled from "styled-components";

// Assets
import CloseIcon from "./assets/svg/CloseIcon";
import LogoIcon from "./assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {



  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
            <li className="semiBold font15 pointer">
              <a href="/Accueil" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Accueil
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Forum" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Forum
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Activités" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Activités
              </a>
            </li>
            <li className="semiBold font15 pointer">
            <a href="/Sections/Contact" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Nous connaître
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Adherer" 
              onClick={() => toggleSidebar(!sidebarOpen)} 
              style={{ padding: "10px 15px" }}>
                Adhérer
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Sections/Promouvoir" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Promouvoir
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Apprendre" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Apprendre
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Enseigner" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Enseigner
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a href="/Divers" onClick={() => toggleSidebar(!sidebarOpen)} style={{ padding: "10px 15px" }}>
                Divers
              </a>
            </li>
          </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
