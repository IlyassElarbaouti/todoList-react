import * as React from 'react'
import { useState } from 'react'
import { apiLogin} from '../../api/users'
import SplitScreen from '../../components/SplitScreen/SplitScreen'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../components/Title/Title'
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Description } from '../../components/Description.js/Description'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import { AuthForm } from '../../components/AuthForm/AuthForm'

type Props = {}

const SignIn = (props: Props) => {
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    apiLogin(email, password, navigate)
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
              don't have an account?
              <br />
              sign up
            </Link>
            <Button type="submit">SIGN IN</Button>
          </AuthForm>
        </>
      }
    />
  )
}

export default SignIn
