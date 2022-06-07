import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  max-height: 100vh;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 16px 0;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Title = styled.h1`
  font-size: 5em;
  font-family: Norse-Bold;
  color: ${({ theme }) => theme.colors.title};
  margin: 0 16px;
`;
