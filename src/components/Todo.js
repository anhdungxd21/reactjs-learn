import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import React from "react";


function Todo(props) {
  const [stateIsTrue, setState] = useState(false);
  function deleteHandler(){
    setState(true);
  }

  function closeModalHandler() {
    setState(false);
  }

    return (
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
          {/* Nếu cả 2 đềU true thì value thứ 2 sẽ được return */}

            {stateIsTrue && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {stateIsTrue && <Backdrop onCancel={closeModalHandler} />}
        </div>
        
      );
}

export default Todo;