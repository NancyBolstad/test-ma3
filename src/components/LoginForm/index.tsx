import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Form, StyledInput, Label, StyledLabelText } from './styles';
import Button from '../Button';

interface Props {}

const schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(4, 'At least four characters'),
});

const LoginForm: React.FC<Props> = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: schema,
  });

  //@ts-ignore
  const onSubmit = data => {
    if (data.userName && data.password) {
      alert('Successful');
    }
  };

  //@ts-ignore
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Label>
        <StyledLabelText>Username</StyledLabelText>
        <StyledInput type="text" name="userName" placeholder="Your username" ref={register} />
      </Label>
      {/* 
      // @ts-ignore */
      errors.userName && <span>{errors.userName.message}</span>}
      <Label>
        <StyledLabelText>Password</StyledLabelText>
        <StyledInput type="text" name="password" placeholder="Your password" ref={register} />
      </Label>
      {/* 
      // @ts-ignore */
      errors.password && <span>{errors.password.message}</span>}
      <Button size="medium" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
