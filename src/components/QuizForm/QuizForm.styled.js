import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
// export const StyledForm = styled.form;
export const StyledForm = styled(Form)`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
