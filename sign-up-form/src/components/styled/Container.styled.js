import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: column;
  }
`;
