import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Link from "../components/Link";
import Button from "../components/Button";

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 18rem;
  padding-right: 0;

  @media screen and (min-width: 768px) {
    padding-right: ${(props) => (props.index === 0 ? "6rem" : "0")};
  }
`;

const StyledFeature = styled.div`
  margin: 0;
  align-items: center;
  display: flex;
`;

const StyledTagline = styled.span`
  font-family: Fakt Pro Bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #f9f9fb;

  @media screen and (min-width: 1280px) {
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -2px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -1px;
  }
`;

const StyledDesc = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #e3e5e7;

  @media screen and (min-width: 1279px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Content = (props) => {
  const {
    tagline,
    title,
    description,
    placeholder,
    cta,
    index = 0,
    hasInputOnly = false,
    hasLink = false,
    hasButtonOnly = false,
    hasInputAndButton = false,
    hasTagline = false,
    isHero = false,
    isPrimaryButton = false,
  } = props;
  return (
    <StyledContent index={index}>
      <StyledFeature>
        <img src="/svgs/icon.svg" />
        {hasTagline && <StyledTagline>{tagline}</StyledTagline>}
      </StyledFeature>
      <StyledTitle large={isHero}>{title}</StyledTitle>
      <StyledDesc>{description}</StyledDesc>
      {hasInputAndButton && (
        <StyledInputContainer>
          <Input placeholder={placeholder} />
          <Button isPrimary={isPrimaryButton} cta={cta} />
        </StyledInputContainer>
      )}
      {hasInputOnly && <Input placeholder={placeholder} />}
      {hasLink && <Link cta={cta} />}
      {hasButtonOnly && <Button isPrimary={isPrimaryButton} cta={cta} />}
    </StyledContent>
  );
};
export default Content;
