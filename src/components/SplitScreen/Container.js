import styled from 'styled-components';

export const Container = styled.div`
  color: #0d0c1d;
  min-height: 400px;
  min-width: 550px;
  width: 50vw;
  height: 50vh;
  margin-top: 20vh;
  display: flex;
  border: 1px solid #bfbfbf;
  box-shadow: 0px 0px 25px 3px rgba(49, 49, 49, 0.2);
`;

export const RightDiv = styled.div`
  background-color: #a69cac;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftDiv = styled.div`
  width: 45%;
  background-color: #161b33;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
`;
