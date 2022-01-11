import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 56px;
  min-width: 10rem;
  background: #333333;
  border: 1px solid #606060;
  border-radius: ${(props) => (props.standalone ? "4px" : "4px 0 0 4px")};
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
  opacity: 0.8;
  padding-left: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
`;

const Input = (props) => (
  <StyledInput
    role="input"
    standalone={props.hasInputOnly}
    placeholder={props.placeholder}
  />
);
export default Input;
