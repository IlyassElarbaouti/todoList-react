import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { fetchLogin } from '../../api/users';
import SplitScreen from '../../components/SplitScreen/SplitScreen';
import Title from '../../components/SplitScreen/Title/Title';
import { Description } from '../../components/SplitScreen/Description.js/Description';
import Paragraph from '../../components/SplitScreen/Paragraph/Paragraph';
import {
  AuthForm,
  Input,
  Button,
} from '../../components/SplitScreen/AuthForm/AuthForm';

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetchLogin(email, password, navigate);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <SplitScreen
      leftPart={
        <>
          <Title color="#A69CAC">Welcome Back👋</Title>
          <Paragraph>Sign in to Access your Todo List!</Paragraph>
        </>
      }
      rightPart={
        <>
          <Title color="#161B33" className="authentication__title">
            SIGN IN
          </Title>
          <Description>use your email and password for signing in</Description>
          <AuthForm onSubmit={handleSubmit}>
            <Input
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              type="email"
              name="email"
            />
            <Input
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              type="password"
              name="password"
            />
            <Link to="/sign-up">
              {"don't have an account?"}
              <br />
              sign up
            </Link>
            <Button type="submit">SIGN IN</Button>
          </AuthForm>
        </>
      }
    />
  );
};

export default SignIn;
