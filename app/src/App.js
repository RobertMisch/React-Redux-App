import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {addSpell, removeSpell, fetchSpells} from './store/actions/spellActions'
import SpellList from './components/SpellList'

import './App.css';

function App(props) {
  useEffect(()=>{
    props.fetchSpells()
  },[])
  return (
    <div className="App">
      <div className="mySpells">just some filler</div>
      <div className="allSpell"><SpellList spells={props.spells}/></div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    spells:state.spells.spells
  };
};

export default connect(
  mapStateToProps,
  {fetchSpells ,addSpell , removeSpell})(App)
