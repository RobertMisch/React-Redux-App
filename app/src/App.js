import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {addSpell, removeSpell, fetchSpells, fetchSpellDetails} from './store/actions/spellActions'
import SpellList from './components/SpellList'

import './App.css';

function App(props) {
  useEffect(()=>{
    props.fetchSpells()
  },[])
  
  return (
    <div className="App">
      <div className="mySpells"><h4>My Spells</h4></div>
      <div className="allSpells">
        <h4>All Spells</h4>
        <SpellList spells={props.spells}/></div>
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
  {fetchSpells, fetchSpellDetails, addSpell, removeSpell})(App)
