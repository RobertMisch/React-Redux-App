import React from 'react';

const SpellCard = props => {
  console.log(props)
  return (
    <div className='spellcard'>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="addbutton" onClick={()=>{}}>Add</button>
      <p className='spellname'>{props.spells.name}</p>
    </div>
  );
};

export default SpellCard;