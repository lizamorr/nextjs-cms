import React from "react";
import styled from "styled-components";
import Content from "../components/Content";

const StyledColumnContainer = styled.div`
  padding: 4rem 2rem;
  min-width: 18rem;
  max-width: 120rem;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    padding: 8rem 6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 6rem 4rem;
  }
`;

const StyledColumnFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Columns = (props) => {
  const { columns } = props;
  return (
    <StyledColumnContainer>
      <StyledColumnFlex>
        {columns.map((column, index) => (
          <Content
            index={index}
            key={index}
            hasTagline={false}
            title={column.title}
            description={column.description}
            hasLink={true}
            hasButtonOnly={false}
            hasInputOnly={false}
            hasInputAndButton={false}
            cta={column.cta}
          />
        ))}
      </StyledColumnFlex>
    </StyledColumnContainer>
  );
};
export default Columns;
