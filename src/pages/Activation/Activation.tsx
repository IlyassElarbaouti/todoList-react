import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Title } from '../../components/Title/Title';
import SplitScreen from '../../components/SplitScreen/SplitScreen';
import { Paragraph } from '../../components/Paragraph/Paragraph';

const Activation = () => (
  <SplitScreen
    leftPart={
      <>
        <FontAwesomeIcon style={{ fontSize: '50px' }} icon={faSadTear} />
        <Title>Please, activate your account to continue </Title>
      </>
    }
    rightPart={
      <>
        <Paragraph>
          <Link to="/">back to sign in page</Link>
        </Paragraph>
      </>
    }
  />
);

export default Activation;
