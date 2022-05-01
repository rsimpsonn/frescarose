
import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './Title'
import content from './assets/content.json'
import MessagesBar from './MessagesBar'
import Message from './Message'
import MessageAttachments from './MessageAttachments'

function View(props) {

  const [index, setIndex] = useState(0)
  const [funds, setFunds] = useState(100)
  const [currMessages, setCurrMessages] = useState([])
  const [lookingAt, setLookingAt] = useState(0)

  const isQualified = (m, vars) => {
    for (const q in m['qualifiers']) {
      if (vars[q] != m['qualifiers'][q]) {
        return false
      }
    }

    return true
  }

  useEffect(() => {
    setCurrMessages(currMessages.map((m, i) => {
      return {
        ...m,
        read: i == lookingAt ? true : m.read
      }
    }))

  }, [lookingAt])

  useEffect(() => {
    const messages = content['messages'][index]
    setCurrMessages(messages.map((m, i) => {
      return {
        ...m,
        read: i == 0,
        responded: m['decision'] ? false : true,
        lookAt: () => {setLookingAt(i)},
        hidden: m['qualifiers'] ? !isQualified(m, props.vars) : false
      }
    }))

    let funds = 100
    for (const k in props.vars) {
      if (content.optionCosts[k] && content.optionCosts[k][props.vars[k]]) {
        funds -= content.optionCosts[k][props.vars[k]]
      }
    }
    setFunds(funds)

    setLookingAt(0)
  }, [index])

  const readyToMoveOn = (currMessages.filter((m) => !m.hidden).filter((m) => !m.read).length == 0) && (currMessages.filter((m) => !m.hidden).filter((m) => {if (m.decision) { return props.vars[m.decision['variable']] ? false : true } else { return false }}).length == 0)

  const hasAttachments = currMessages[lookingAt] ? currMessages[lookingAt].attachments.length > 0 : false
  
  return (
    <div className='page'>
    <Title gameEnabled index={index} funds={funds} readyToMoveOn={readyToMoveOn} moveOn={() => {if (index == content['messages'].length - 1) { props.setView(2) } else { setIndex(index + 1)}}} />
    <div className='main-window'>
    <MessagesBar messages={currMessages} lookingAt={lookingAt} vars={props.vars} />
    <Message message={currMessages[lookingAt] ? currMessages[lookingAt] : {'title': '', 'from': '', 'message': ''}} 
    makeDecision={(k, v) => { const updated = {...props.vars}; updated[k] = v; props.setVars(updated);}} vars={props.vars} />
    {hasAttachments && <MessageAttachments attachments={currMessages[lookingAt].attachments} />}
    </div>
    </div>
  );
}

export default View;
