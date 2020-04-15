import axios from 'axios'

export const removeFeature = (id)=>{
    console.log('remove feature working')
    return{type:'REMOVE_FEATURE', payload:id}
}
export const addFeature = (id)=>{
    console.log('add feature working')
    return{type:'ADD_FEATURE', payload:id}
}

export const fetchSpells = () => {
    return dispatch => {
      dispatch({ type: 'FETCH_SPELL_START' });
      axios
        .get('')//http://dnd5eapi.co/api/spells
        .then(res => {
          // res.data.quote
          dispatch({ type: 'FETCH_SPELL_SUCCESS', payload: res.data });
        })
        .catch(err => {
          // message: err.response.data
          // status: err.response.status
          dispatch({
            type: 'FETCH_SPELL_FAILURE',
            payload: `Error ${err.response.status}: ${err.response.data}`
          });
        });
    };
  };