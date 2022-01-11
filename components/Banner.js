import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledBannerContainer = styled.div`
  background: #ffffff;
  padding: 4rem 2rem;
  min-width: 18rem;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 8rem 6rem 8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 4rem;
  }
`;

const StyledBannerFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
`;

const StyledSlogan = styled.p`
  flex: 1;
  margin: 0;
  font-size: 28px;
  line-height: 36px;
  line-spacing: -0.4px;
  color: #242424;
  text-align: center;
  min-width: 18rem;
  padding: 0 0 2rem 0;

  @media screen and (min-width: 1280px) {
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -1px;
    text-align: left;
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
    text-align: left;
    padding: 0;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Banner = (props) => {
  const { slogan } = props;
  return (
    <StyledBannerContainer>
      <StyledBannerFlex>
        <StyledSlogan>{slogan}</StyledSlogan>
        <StyledButtonContainer>
          <Button
            hasButtonOnly={true}
            isPrimary={true}
            cta={props["cta-one"]}
          />
          <Button hasButtonOnly={true} cta={props["cta-two"]} />
        </StyledButtonContainer>
      </StyledBannerFlex>
    </StyledBannerContainer>
  );
};
export default Banner;
