import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  text-align: left;
  align-self: flex-start;
  margin: 20px 0;

  & em {
    font-size: inherit;
    font-weight: 600;
  }
`;
