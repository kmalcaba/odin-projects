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
  padding: 20px 20px 20px 0;

  & > label {
    margin-right: 16px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 800px;

  flex: 0 1 auto;

  & > div,
  & > ul {
    flex: 1;
  }
`;
