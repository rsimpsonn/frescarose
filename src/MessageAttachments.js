
import './App.css';
import React, { useState, useEffect } from 'react';

function MessageAttachments(props) {

  return (
    <div className='attachments'>
    <div style={{padding: 10}}>
    {props.attachments.map(a => {
      if (a.type == 'image') {
        return <div className='attachment'>{a.title}<img src={a.link} style={{width: "100%", height: 'auto'}} /></div>;
      } else if (a.type == 'video') {
        return <div className='attachment'>{a.title}<iframe width='100%' height='250px' src={a.link} frameBorder='0' allowFullScreen /></div>
      } else return <div />;
    })}
    </div>
    </div>
  );
}

export default MessageAttachments;
