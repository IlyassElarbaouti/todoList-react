import * as React from 'react'
import SplitScreen from '../../components/SplitScreen/SplitScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { Title } from '../../components/Title/Title'
import { Link } from 'react-router-dom'
import { Paragraph } from '../../components/Paragraph/Paragraph'

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <SplitScreen
      leftPart={
        <>
          <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faSadTear} />
          <Title>Page not found </Title>
        </>
      }
      rightPart={
        <>
          <Paragraph>
            <Link to="/">back to home page</Link>
          </Paragraph>
        </>
      }
    />
  )
}

export default PageNotFound
