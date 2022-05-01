
import './main.css';
import React, { useState } from 'react';
import moment from 'moment';

function Title(props) {

  const [name, setName] = useState('')
  const [showView, setView] = useState(false)

  return (
    <div className='title-wrapper'>
    <div className='title'>
    <div style={{height: 60, display:'flex', flexDirection: 'column', justifyContent:'space-between'}}>
    <div className='row'>
    <div className='logo'>Frescarose</div></div>
    {(props.gameEnabled && !props.readyToMoveOn) && <div>Read and respond to all messages to move to the next day.</div>}
    {(props.gameEnabled && props.readyToMoveOn) && <div style={{cursor:'pointer', textDecoration: 'underline', fontWeight: 600}} onClick={props.moveOn}>Move to next day</div>}
    </div>
    {props.gameEnabled && 
      <div><span style={{fontWeight: 600}}>Days left until festival:</span> {5 - props.index} | <span style={{fontWeight: 600}}>Remaining budget:</span> {props.funds}</div>}
    </div>
    </div>
  );
}

export default Title;
