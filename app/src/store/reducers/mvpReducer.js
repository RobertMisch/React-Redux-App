const initialState = {
    spells: {},
    spellList:[],
    isFetching: false,
    error: ''
  };
  
  export const spellsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SPELLS_START':
        return {
          ...state,
          isFetching: true
        };
      case 'FETCH_SPELLS_SUCCESS':
        return {
          ...state,
          isFetching: false,
          spells: action.payload,
          error: ''
        };
      case 'FETCH_SPELLS_FAILURE':
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };