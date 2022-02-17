import axios from 'axios'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Description } from '../styled components/Right/Description.js/Description'
import { Paragraph } from '../styled components/Left/Paragraph/Paragraph'
import { Button } from '../styled components/Right/Form/Button/Button'
import { Form } from '../styled components/Right/Form/Form'
import { Input } from '../styled components/Right/Form/Input/Input'
import { LeftDiv } from '../styled components/Left/Left'
import { RightDiv } from '../styled components/Right/Right'
import { Title } from '../styled components/Title/Title'
import { Link } from 'react-router-dom'
import { Container } from '../styled components/Container'
import { useNavigate } from 'react-router-dom'
import { apiLogin } from '../../../../apiService/usersApiService'

const SignIn = () => {
  let navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault()
    apiLogin(email,password,navigate)
  }

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <Container>
      <LeftDiv>
        <Title color="#A69CAC">Welcome Back👋</Title>
        <Paragraph>Sign in to Access your Todo List!</Paragraph>
      </LeftDiv>

      <RightDiv>
        <Title color="#161B33" className="authentication__title">
          SIGN IN
        </Title>
        <Description>use your email and password for signing in</Description>
        <Form onSubmit={handleSubmit}>
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
        </Form>
      </RightDiv>
    </Container>
  )
}

export default SignIn
