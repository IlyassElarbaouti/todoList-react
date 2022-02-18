import styled from 'styled-components';

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
export default Button;
