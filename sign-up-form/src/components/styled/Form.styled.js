import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.form};
  width: 100%;
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 1.5em;
`;

export const FieldItem = styled.p`
  padding: 10px 20px 10px 0;

  & > label,
  & > input {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-bottom: 20px;

  flex: 0 1 800px;

  & > div,
  & > ul {
    flex: 1;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.9em;
  padding: 10px 0;
`;

export const Input = styled.input`
  margin-right: 60px;
  border: 2px #eee solid;
  padding: 3px;

  &:active,
  :focus {
    box-shadow: 2px 3px 5px ${({ theme }) => theme.colors.shadowSm};
  }
`;
