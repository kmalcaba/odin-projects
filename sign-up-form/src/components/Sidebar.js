import {
  StyledSidebar,
  Image,
  Logo,
  LogoContainer,
  Title,
} from "./styled/Sidebar.styled";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Image src='./images/bg-image.jpg' alt='' />
      <LogoContainer>
        <Logo src='./images/odin-lined.png' />
        <Title>ODIN</Title>
      </LogoContainer>
    </StyledSidebar>
  );
};

export default Sidebar;
