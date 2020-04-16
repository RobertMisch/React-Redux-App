import React from 'react'
import SpellCard from './SpellCard'

const SpellList = props => {
    console.log(props)
    return (
      <div className="SpellList">
        {props.spells.map(item => (
            <SpellCard spells={item}/>
        ))}
      </div>
    );
  };
  
  export default SpellList;