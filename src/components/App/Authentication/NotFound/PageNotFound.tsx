import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
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

const PageNotFound = () => {

  return (
    <Container>
      <LeftDiv>
        <Title>Page not found </Title>
      </LeftDiv>

      <RightDiv></RightDiv>
    </Container>
  )
}

export default PageNotFound
