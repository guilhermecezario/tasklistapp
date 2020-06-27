import styled, { keyframes } from 'styled-components';

const animatedDisplay = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div`
  width: 15rem;
  background: #201B2D;
  border-radius: 10px;

  margin: 5px;

  border-radius: 2px;

  padding: 15px;

  animation: ${animatedDisplay} 0.8s 0s none;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const TitleList = styled.h1`
  font-size: 15px;

  color: #BABABA;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 5px;
  padding: 5px;

  background-color: #201B2D;
  border: 1px solid #FFFFFF1A;

  border-radius: 2px;

  color: #BABABA;
`;

export const Button = styled.button`
  height: 5vh;

  border: 1px solid #191622;

  background: #13111B;

  border-radius: 2px;

  color: #BABABA;
`;