import { StyledForm, Title, FieldItem, Flex } from "./styled/Form.styled";

const Form = () => {
  return (
    <StyledForm>
      <Title>Let's do this!</Title>
      <Flex>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
        <FieldItem>
          <label for='first_name'>First Name</label>
          <input type='text' name='first_name' id='first_name' />
        </FieldItem>
      </Flex>
    </StyledForm>
  );
};

export default Form;
