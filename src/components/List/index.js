import React, {useState} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Creators as TodoActions } from '../../store/ducks/todos';

import { Container, Header, TitleList, Form, Input, Button} from './styles';
import {FaPlus, FaTrash} from 'react-icons/fa';

import Todo from '../Todo';

function List({list, todos, addTodo, remove}) {
  const [newTodo, setNewTodo] = useState('');
  function handleAddList(event) {
    event.preventDefault();
    if(newTodo) {
      addTodo(newTodo, list.id);

      setNewTodo('');
    }
  }

  function removeList() {
    remove(list.id);
  }

  return (
    <Container>
      <Header>
        <TitleList>{list.title}</TitleList>
        <FaTrash color="#BABABA" size={15} onClick={() => removeList()}/>
      </Header>

      {todos.map(todo => {
        if(todo.id_list === list.id) {
          return (<Todo key={todo.id} todo={todo}/>)
        }
      })}

      <Form onSubmit={handleAddList}>
        <Input
          placeholder="Digite sua tarefa"
          onChange={event => setNewTodo(event.target.value)}
          value={newTodo}
        />
        <Button>Adicionar tarefa</Button>
      </Form>

    </Container>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);