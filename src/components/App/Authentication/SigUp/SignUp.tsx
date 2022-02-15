import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { Description } from '../styled components/Right/Description.js/Description'
import { Paragraph } from '../styled components/Left/Paragraph/Paragraph'
import { Button } from '../styled components/Right/Form/Button/Button'
import { Form } from '../styled components/Right/Form/Form'
import { Input } from '../styled components/Right/Form/Input/Input'
import { LeftDiv } from '../styled components/Left/Left'
import { Link } from 'react-router-dom'
import { RightDiv } from '../styled components/Right/Right'
import { Title } from '../styled components/Title/Title'
import { Container } from '../styled components/Container'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()
        axios
            .post('http://localhost:9000/registration', {
                email,
                password,
            })
            .then((res) => {
                if (res.status === 201) {
                return navigate('/')
             } })
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
        <Title color="#A69CAC">Welcome 👋</Title>
        <Paragraph>
          To get started please sign up with your personal info
        </Paragraph>
      </LeftDiv>

      <RightDiv>
        <Title color="#161B33" className="authentication__title">
          SIGN UP
        </Title>
        <Description>use your email and password for signing up</Description>
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
          <Link to='/'>
            already have an account?
            <br />
            sign in
          </Link>
          <Button type="submit">SIGN UP</Button>
        </Form>
      </RightDiv>
    </Container>
  )
}

export default SignUp
