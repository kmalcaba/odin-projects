import {
  StyledForm,
  Title,
  FieldItem,
  Flex,
  Input,
  Label,
} from "./styled/Form.styled";

const Form = () => {
  return (
    <StyledForm>
      <Title>Let's do this!</Title>
      <Flex>
        <FieldItem>
          <Label for='first_name'>First Name</Label>
          <Input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <Label for='last_name'>Last Name</Label>
          <Input type='text' name='last_name' id='last_name' />
        </FieldItem>
        <FieldItem>
          <Label for='email'>Email</Label>
          <Input type='email' name='email' id='email' />
        </FieldItem>
        <FieldItem>
          <Label for='phone_number'>Phone Number</Label>
          <Input type='tel' name='phone_number' id='phone_number' />
        </FieldItem>
        <FieldItem>
          <Label for='password'>Password</Label>
          <Input type='password' name='password' id='password' />
        </FieldItem>
        <FieldItem>
          <Label for='confirm_pass'>Confirm Password</Label>
          <Input type='password' name='confirm_pass' id='confirm_pass' />
        </FieldItem>
      </Flex>
    </StyledForm>
  );
};

export default Form;
