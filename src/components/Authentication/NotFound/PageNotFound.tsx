import axios from 'axios'
import * as React from 'react'
import { Paragraph } from '../components/Left/Paragraph/Paragraph'
import { LeftDiv } from '../components/Left/Left'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { RightDiv } from '../components/Right/Right'
import { Title } from '../components/Title/Title'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

const PageNotFound = () => {
  return (
    <Container>
      <LeftDiv>
        <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faSadTear} />
        <Title>Page not found </Title>
      </LeftDiv>

      <RightDiv>
        <Paragraph>
          <Link to="/">back to sign in page</Link>
        </Paragraph>
      </RightDiv>
    </Container>
  )
}

export default PageNotFound
