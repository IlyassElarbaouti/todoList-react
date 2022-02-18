import * as React from 'react'
import { Container } from '../Container/Container'
import { RightDiv,LeftDiv } from './Container'

interface Props {
  leftPart: React.ReactNode
  rightPart: React.ReactNode
}

const SplitScreen = ({leftPart, rightPart}:Props) => {
  return (
    <Container>
      <LeftDiv>
          {leftPart}
      </LeftDiv>
      <RightDiv>
          {rightPart}
      </RightDiv>
    </Container>
  )
}

export default SplitScreen