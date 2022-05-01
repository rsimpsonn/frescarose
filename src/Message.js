
import './App.css';
import React, { useState, useEffect } from 'react';

function Message(props) {

  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log(props.message['message'])
    fetch(props.message['message']).then((c) => c.text()).then((r) => setMessage(r))
  }, [props.message['message']])

  const decisionChecked = props.message['decision'] ? props.vars[props.message['decision']['variable']] : false

  const prepContent = (m, vars) => {
    let out = m
    for (const v in vars) {
      out = out.replaceAll(`^${v}`, vars[v])
    }
    return out
  }

  return (
    <div className='open-message'>
    <div style={{padding: 10}}>
    <h2 style={{margin: 0}}>{prepContent(props.message['title'], props.vars)}</h2>
    <p style={{fontWeight: 600, marginTop: 10}}>{prepContent(props.message['from'], props.vars)}</p>
    <p>{prepContent(message, props.vars)}</p>
    </div>
    {props.message['decision'] && 
    <div className='decision-box'>
    <span style={{fontWeight: 600}}>{prepContent(props.message['decision']['title'], props.vars)}</span><br/>
    {props.message['decision']['options'].map(o =>  <div className='row' style={{marginTop:2.5, marginBottom: 2.5}}><input type='radio' checked={decisionChecked == o['variable']} style={{backgroundColor: decisionChecked == o['variable'] ? 'black' : 'white'}} onChange={() => props.makeDecision(props.message['decision']['variable'], o['variable'])} name={props.message['decision']['variable']} value={o['title']} id={o['variable']}/>{prepContent(o['title'], props.vars)} (Cost: {o['cost']})</div>)}
    </div>
  }
    </div>
  );
}

export default Message;
