import React from "react";
import styled from "styled-components";
import Content from "../components/Content";

const StyledHeroContainer = styled.div`
  padding: 0rem 2rem 6rem 2rem;
  max-width: 120rem;
  min-width: 18rem;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 0rem 6rem 8rem 6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0rem 4rem 8rem 4rem;
    max-width: 144rem;
  }
`;

const StyledHeroFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
  } ;
`;

const StyledHeroImg = styled.img`
  max-width: 592px;
  max-height: 592px;
  min-width: 18rem;
  min-height: 300px;
  height: auto;
  width: 100%;
  padding-top: 2rem;
`;

const StyledHeroImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Hero = (props) => {
  return (
    <StyledHeroContainer>
      <StyledHeroFlex>
        <Content
          isHero={true}
          hasTagline={true}
          tagline={props.tagline}
          title={props.title}
          description={props.description}
          placeholder={props.placeholder}
          cta={props.cta}
          hasInputOnly={false}
          hasLink={false}
          hasButtonOnly={false}
          hasInputAndButton={true}
          isPrimaryButton={true}
        />
        <StyledHeroImgContainer>
          <StyledHeroImg src={props.image} />
        </StyledHeroImgContainer>
      </StyledHeroFlex>
    </StyledHeroContainer>
  );
};

export default Hero;
