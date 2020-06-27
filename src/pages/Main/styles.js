import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;

  background: #191622;

  overflow: auto;
`;

export const Form = styled.div`
  width: 15rem;

  display: flex;
  flex-direction: column;

  padding: 5px;
`;

export const Input = styled.input`
  margin-bottom: 5px;
  padding: 5px;

  background-color: #13111B;
  border: 1px solid #FFFFFF1A;

  border-radius: 2px;

  color: #BABABA;
`;

export const Button = styled.button`
  height: 5vh;

  border: 1px solid #191622;

  background: #201B2D;

  border-radius: 2px;

  color: #BABABA;
`;