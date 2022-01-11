import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  display: flex;
  font-size: 20px;
  line-height: 28px;
  color: #0d96c6;
  cursor: pointer;
  padding-bottom: 2rem;
`;

const StyledArrow = styled.img`
  padding-left: 5px;
  align-self: baseline;
`;

const Link = (props) => {
  return (
    <StyledLink role="link">
      {props.cta}
      <StyledArrow src="/svgs/arrow.svg" />
    </StyledLink>
  );
};
export default Link;
