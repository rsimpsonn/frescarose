
import './App.css';
import React, { useState, useEffect } from 'react';

function MessagesBar(props) {

  const prepContent = (m, vars) => {
    let out = m
    for (const v in vars) {
      out = out.replaceAll(`^${v}`, vars[v])
    }
    return out
  }

  return (
    <div className='messages-bar'>
    {props.messages.map((m, i) => <div className='small-message' style={i == props.lookingAt ? {backgroundColor: 'rgba(255,255,255,0.5)', hidden: m['hidden'] ? 'none' : 'block'} : {display: m['hidden'] ? 'none' : 'block'}} onClick={m.lookAt}><span style={{fontWeight: m.read ? 400 : 600}}>{m['title']}</span><br/>{prepContent(m['from'], props.vars)}</div>)}
    </div>
  );
}

export default MessagesBar;
