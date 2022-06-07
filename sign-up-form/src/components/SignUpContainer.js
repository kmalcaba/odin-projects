import { StyledContainer, Paragraph } from "./styled/SignUpContainer.styled";

const SignUpContainer = () => {
  return (
    <StyledContainer>
      <Paragraph>
        This is not a real online service! You know you need something like this
        in your life to help you realize your deepest dreams. Sign up{" "}
        <em>now</em> to get started.
      </Paragraph>
      <Paragraph>
        You <em>know</em> you want to.
      </Paragraph>
    </StyledContainer>
  );
};

export default SignUpContainer;
