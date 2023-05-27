import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const TodoCreate = () => {
    return (  
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-info" id="button-addon2">
          <FontAwesomeIcon icon={faPlusCircle} />New
        </Button>
      </InputGroup>
    );
}
 
export default TodoCreate;

