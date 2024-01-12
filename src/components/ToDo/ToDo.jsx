import React from 'react';
import { Element, InputStyle } from './ToDo.styled';

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <Element>
        <InputStyle className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
          {todo.title}
        </InputStyle>
        <div className="col">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
          ></button>
        </div>
      </Element>
    </li>
  );
};

export default ToDo;
