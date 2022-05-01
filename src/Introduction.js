
import './main.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Title from './Title'
import content from './assets/content.json'

function Introduction(props) {

  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    fetch(content['introduction']).then((c) => c.text()).then((r) => setMessage(r))
  }, [])

  return (
    <div className='page'>
    <Title />
    <div className='left-header'>Frescarose Folk Festival</div>
    <div className='left-header'>
    <h2>You are the Director of the Frescarose Folk Festival.</h2>
    <p>{message}</p>
    <label> 
    Enter your name:
    </label>
    <input type='text' value={props.name} onChange={(e) => props.setName(e.target.value)} />
    <button onClick={() => props.setView(1)}>Start</button>
    </div>
    </div>
  );
}

export default Introduction;
