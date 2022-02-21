import styled from 'styled-components';

export const AuthForm = styled.form`
  height: 45%;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  cursor: pointer;
  border: none;
  background-color: #ececec;
  height: 40px;
  padding: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 8rem;
  background-color: #ececec;
  border: 2px solid #e83128;
  color: #e83128;
  box-shadow: 0px 0px 25px 3px rgba(49, 49, 49, 0.1);
  font-weight: 700;
  border-radius: 20px;
  &:hover {
    border: none;
    background-color: #e83128;
    color: white;
  }
`;
