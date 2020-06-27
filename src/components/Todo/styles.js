import styled, { keyframes } from 'styled-components';

const animatedDisplay = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const Container = styled.div`
  background: #191622;

  padding: 5px;

  border-radius: 5px;

  margin-bottom: 5px;

  animation: ${animatedDisplay} 0.8s 0s none;
`;

export const TodoTitle = styled.p`
  color: #E1E1E6;

  font-size: 12px;

  word-break: break-all;
`;
