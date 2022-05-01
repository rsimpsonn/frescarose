
import './App.css';
import React, { useState } from 'react';
import Introduction from './Introduction';
import View from './View';
import Title from './Title';
import Outcome from './Outcome';

function App() {

  const [vars, setVars] = useState({})
  const [showView, setView] = useState(0)


  return (
    <div>
    {showView == 0 &&
    <Introduction name={vars['name']} setName={(name) => setVars({...vars, name: name, firstName: name.split(" ")[0]})} setView={setView} />}
    {showView == 1 &&
    <View vars={vars} setVars={setVars} setView={setView} />}
    {showView == 2 &&
    <Outcome vars={vars} />}
    </div>
  );
}

export default App;
