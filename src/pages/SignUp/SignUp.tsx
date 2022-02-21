import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSignUp } from '../../api/users';
import {
  AuthForm,
  Input,
  Button,
} from '../../components/SplitScreen/AuthForm/AuthForm';
import { Description } from '../../components/SplitScreen/Description.js/Description';
import Paragraph from '../../components/SplitScreen/Paragraph/Paragraph';
import SplitScreen from '../../components/SplitScreen/SplitScreen';
import Title from '../../components/SplitScreen/Title/Title';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetchSignUp(email, password).then(() => navigate('/'));
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
          <Title color="#A69CAC">Welcome 👋</Title>
          <Paragraph>
            To get started please sign up with your personal info
          </Paragraph>
        </>
      }
      rightPart={
        <>
          <Title color="#161B33" className="authentication__title">
            SIGN UP
          </Title>
          <Description>use your email and password for signing up</Description>
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
            <Link to="/">
              already have an account?
              <br />
              sign in
            </Link>
            <Button type="submit">SIGN UP</Button>
          </AuthForm>
        </>
      }
    />
  );
};

export default SignUp;
