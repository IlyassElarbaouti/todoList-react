import * as React from 'react'
import { useState } from 'react'
import { apiSignUp } from '../../api/users'
import { AuthForm } from '../../components/AuthForm/AuthForm'
import { Button } from '../../components/Button/Button'
import { Description } from '../../components/Description.js/Description'
import { Input } from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import SplitScreen from '../../components/SplitScreen/SplitScreen'
import { Title } from '../../components/Title/Title'

type Props = {}

const SignUp = (props: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    apiSignUp(email, password)
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }
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
  )
}

export default SignUp
