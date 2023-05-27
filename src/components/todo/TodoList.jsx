import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import TodoCreate from './TodoCreate';

const TodoList =() => {
    const [todos, setTodos] = useState([
        {
            'title'  : 'First Todo',
            'status' : 'Pending'
        },
        {
            'title'  : 'Second Todo',
            'status' : 'Done'
        },
        {
            'title'  : 'Third Todo',
            'status' : 'Done'
        }
    ]);
    return(
        <Card>
      <Card.Body>
        <Card.Title className="text-center todo-title">
            My Todos
        </Card.Title>

        <TodoCreate/>

        <ListGroup>
            {
                todos.map((todo, index) =>(
                    <ListGroup.Item key={index}>
                    <div className="float-start">
                        {todo.title}
                    </div>
                    <div className="float-end">
                        <Button variant="outline-success" className='ms-2'>
                           <FontAwesomeIcon icon= {faEdit}/>
                        </Button>
                        <Button variant="outline-danger" className='ms-2'>
                           <FontAwesomeIcon icon= {faTrash}/>
                        </Button>
                    </div>
                  </ListGroup.Item>
                ))
            }
    </ListGroup>
      </Card.Body>
    </Card>
    );
}
export default TodoList;