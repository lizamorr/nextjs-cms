import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: max-content;
  height: 56px;
  padding: 22px 30px;
  background: ${(props) => (props.primary ? "#eb5424" : "#ffffff")};
  border: ${(props) => (props.primary ? "none" : "1.5px solid #CDD2D4")};
  border-radius: ${(props) => (props.standalone ? "3px" : "0 3px 3px 0")};
  cursor: pointer;
  margin: ${(props) => (props.standalone ? "1rem" : "0")};
  font-family: Fakt Pro Bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${(props) => (props.primary ? "#ffffff" : "#242424")};

  @media (max-width: 645px) {
    border-radius: 3px;
  }
`;

const Button = (props) => {
  const { cta, isPrimary, hasButtonOnly } = props;
  return (
    <StyledButton role="button" standalone={hasButtonOnly} primary={isPrimary}>
      {cta}
    </StyledButton>
  );
};
export default Button;
