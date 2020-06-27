import React from 'react';

import { Container, Input, Button } from './styles';

function Form({}) {
  return (
    <Container>
        <Input 
          placeholder="Nome da lista"
          onChange={event => setNewList(event.target.value)}
          value={newList}
        />
        <Button onClick={event => handleAddList(event)}>Adicionar lista</Button>
      </Container>
  );
}

export default Form;