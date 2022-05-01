
import './main.css';
import React, { useState } from 'react';
import content from './assets/content.json'
import Title from './Title'

function Outcome(props) {

	// let out = {}
	// for (const o in content['outcomes']) {
	// 	out[o] = 0
	// }
	// for (const v in props.vars) {
	// 	if (content['outcomeTies'][v]) {
	// 		const outC = props.vars[v]
	// 		out[content['outcomeTies'][v][outC]] += 1
	// 	}
	// }

	// let greatestOutcome = ''
	// let outcomeCount = 0

	// for (const k in out) {
	// 	if (out[k] > outcomeCount) {
	// 		greatestOutcome = k 
	// 		outcomeCount = out[k]
	// 	}
	// }

	let greatestOutcome = props.vars['supplyAmps'] == 'approveAmps' ? 'festivalTwo' : 'festivalOne'

	const prepContent = (m, vars) => {
    let out = m
    for (const v in vars) {
      out = out.replaceAll(`^${v}`, vars[v])
    }
    return out
  }

  return (
  	<div className='page'>
    <Title />
    <div className='outcome-box'>
  	<h2>{content['outcomes'][greatestOutcome]['title']}</h2>
  	{prepContent(content['outcomes'][greatestOutcome]['subtitle'], props.vars)}<br /><br />
  	{prepContent(content['outcomes'][greatestOutcome]['text'], props.vars)}
  	</div>
  	</div>
  );
}

export default Outcome;
