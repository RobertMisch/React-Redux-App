import React from 'react'
import SpellCard from './SpellCard'

const SpellList = props => {
    console.log(props)
    return (
      <div className="SpellList">
        <h4>All Spells</h4>
        
        {props.spells.map(item => (
            <SpellCard spells={item}/>
        ))}
      </div>
    );
  };
  
  export default SpellList;