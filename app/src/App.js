import React from 'react';
import { connect } from 'react-redux';
import {addSpell, removeSpell} from './actions/appActions'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="mySpells">just some filler</div>
      <div className="allSpell"><SpellList spells={spells}/></div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    spells:state
  };
};

export default connect(
  mapStateToProps,
  {addSpell, removeSpell})(App)
