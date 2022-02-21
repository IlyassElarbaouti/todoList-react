import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Title from '../../components/SplitScreen/Title/Title';
import SplitScreen from '../../components/SplitScreen/SplitScreen';
import Paragraph from '../../components/SplitScreen/Paragraph/Paragraph';

const PageNotFound = () => (
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
);

export default PageNotFound;
