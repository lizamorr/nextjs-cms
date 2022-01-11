import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  background: #131213;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
`;

const StyledHeaderContent = styled.div`
  position: relative;
  display: flex;
  width: 144rem;
  max-width: 100%;
  margin: auto;
  box-shadow: rgba(255, 255, 255, 0.3) 0 -0.1rem 0 inset;
  padding-left: 2rem;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-left: 4rem;
  }
  @media screen and (min-width: 1280px) and (max-width: 1439px) {
    padding-left: 6rem;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12rem;
  }
`;

const StyledLogo = styled.img`
  margin: 1rem 0;
  cursor: pointer;
`;

function Header() {
  const router = useRouter();
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLogo
          onClick={() => router.push("/")}
          alt="Logo"
          src="/svgs/logo.svg"
          width="87px"
        />
      </StyledHeaderContent>
    </StyledHeader>
  );
}

export default Header;
