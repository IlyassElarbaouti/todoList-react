/* eslint-disable import/no-unresolved */
import * as React from 'react';
import { Container, RightDiv, LeftDiv } from './Container';

interface Props {
  leftPart: React.ReactNode;
  rightPart: React.ReactNode;
}

const SplitScreen = ({ leftPart, rightPart }: Props) => (
  <Container>
    <LeftDiv>{leftPart}</LeftDiv>
    <RightDiv>{rightPart}</RightDiv>
  </Container>
);

export default SplitScreen;
