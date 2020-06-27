import React, {useState} from 'react';

import { Container, Form,  Input, Button} from './styles';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListActions } from '../../store/ducks/lists';

import List from '../../components/List';

function Main({ lists, addList, removeList}) {
  const [newList, setNewList] = useState('');

  function handleAddList(event) {
    event.preventDefault();
    if(newList) {
      addList(newList)

      setNewList('');
    }
  }

  function handleRemoveList(id) {
    removeList(id);
  }

  return (
    <Container>
      {lists.map(list => <List key={list.id} list={list} remove={handleRemoveList}/>)}
      <Form>
        <Input 
          placeholder="Nome da lista"
          onChange={event => setNewList(event.target.value)}
          value={newList}
        />
        <Button onClick={event => handleAddList(event)}>Adicionar lista</Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
