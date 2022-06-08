import {
  StyledContainer,
  Paragraph,
  Button,
} from "./styled/SignUpContainer.styled";
import Form from "./Form";

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
      <Form />
      <Button>Create Account</Button>
      <p>
        Already have an account? <a href='#'>Log in</a>
      </p>
    </StyledContainer>
  );
};

export default SignUpContainer;
