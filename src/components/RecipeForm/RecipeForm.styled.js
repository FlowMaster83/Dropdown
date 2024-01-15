import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

// стилизация кастомных компонентов из библиотек
export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a2a2a;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
