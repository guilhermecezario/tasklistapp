import React from 'react';

import { Container, TodoTitle } from './styles';

function Todo({todo}) {
  return (
    <Container>
      <TodoTitle>{todo.text}</TodoTitle>
    </Container>
  );
}

export default Todo;