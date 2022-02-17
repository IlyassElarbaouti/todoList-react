import * as React from 'react'
import { Paragraph } from '../components/Left/Paragraph/Paragraph'
import { LeftDiv } from '../components/Left/Left'
import { RightDiv } from '../components/Right/Right'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

const Activation = () => {
  return (
    <Container>
      <LeftDiv>
        <Paragraph>Please activate your account to continue</Paragraph>
      </LeftDiv>

      <RightDiv>
        <Paragraph>
          <Link to="/">back to sign in page</Link>
        </Paragraph>
      </RightDiv>
    </Container>
  )
}

export default Activation
