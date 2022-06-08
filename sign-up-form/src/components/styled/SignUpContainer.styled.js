import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > div,
  & > form,
  & > p {
    padding: 0 60px;
  }

  & > p > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.button};
    font-weight: 700;
  }
`;

export const Paragraph = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  text-align: left;
  margin: 20px 20px 20px 0;
  max-width: 900px;

  & em {
    font-size: inherit;
    font-weight: 600;
  }
`;

export const Button = styled.button`
  margin: 60px;
  padding: 16px 32px;
  display: block;
  background-color: ${({ theme }) => theme.colors.button};
  border: none;
  outline: none;
  align-self: flex-start;
  cursor: pointer;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 700;
  box-shadow: 2px 3px 5px ${({ theme }) => theme.colors.shadowSm};

  &:hover,
  :active {
    transform: scale(0.98);
  }
`;
