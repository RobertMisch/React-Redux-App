import axios from 'axios'

export const removeSpell= (id)=>{
    console.log('remove spell working')
    return{type:'REMOVE_SPELL', payload:id}
}
export const addSpell = (id)=>{
    console.log('add spell working')
    return{type:'ADD_SPELL', payload:id}
}

export const fetchSpells = () => {
  console.log('fetchSpells fetching')
    return dispatch => {
      dispatch({ type: 'FETCH_SPELLS_START' });
      axios
        .get('http://www.dnd5eapi.co/api/spells')//http://www.dnd5eapi.co/api/spells
        .then(res => {
          console.log(res)
          dispatch({ type: 'FETCH_SPELLS_SUCCESS', payload: res.data });
        })
        .catch(err => {
          dispatch({
            type: 'FETCH_SPELLS_FAILURE',
            payload: `Error ${err.response.status}: ${err.response.data}`
          });
        });
    };
  };