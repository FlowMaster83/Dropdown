import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Form, FormField, ErrorMessage } from '../RecipeForm/RecipeForm.styled';
import { nanoid } from 'nanoid';

// через библу yup пишем схему валидации (объект)
const RecipeSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  time: Yup.number().positive('more than 0').required('Required'),
  servings: Yup.number().positive('more than 0').required('Required'),
  calories: Yup.number().positive('more than 0').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required'),
});

export const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      // изначальное состояние под капотом (аналог state={})
      initialValues={{
        name: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onSave({
          ...values,
          id: nanoid,
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>

        <FormField>
          Time
          <Field name="time" type="number" />
          <ErrorMessage name="time" component="span" />
        </FormField>

        <FormField>
          Servings
          <Field name="servings" />
          <ErrorMessage name="servings" component="span" />
        </FormField>

        <FormField>
          Calories
          <Field name="calories" />
          <ErrorMessage name="calories" component="span" />
        </FormField>

        <FormField>
          Difficulty
          <Field name="difficulty" as="select">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </Field>
          <ErrorMessage name="difficulty" component="span" />
        </FormField>

        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
