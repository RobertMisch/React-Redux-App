import React from 'react';
// import {fetchSpellDetails} from './store/actions/spellActions'
import '../App.css'

const SpellCard = props => {
  console.log(props)
  return (
    <div className='spellcard'>
      <p className='spellname'>{props.spells.name}</p>
      <button className="addbutton" onClick={()=>{}}>Add</button>
      <button className="detailsbutton" onClick={()=>{}}>Show Details</button>
    </div>
  );
};

export default SpellCard

// export default connect(
//     mapStateToProps,
//     {...props,fetchSpellDetails, addSpell, removeSpell})(SpellCard)