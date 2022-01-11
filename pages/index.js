import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: 24px;
  line-height: 32px;
  color: #e3e5e7;
  cursor: pointer;
`;

const StyledLinkContainer = styled.div`
  display: grid;
  padding: 6rem;
`;

function Index() {
  const router = useRouter();

  return (
    <StyledLinkContainer>
      <StyledLink href="/dummy-data" onClick={() => router.push("/dummy-data")}>
        /dummy-data
      </StyledLink>
    </StyledLinkContainer>
  );
}
export default Index;
