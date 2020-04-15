export const initialState = {
    data:{},
    spells: [],
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
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                spells: action.payload.results,
                error: ''
            };
        case 'FETCH_SPELLS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case 'ADD_SPELL':
            return{

            }
        case 'REMOVE_SPELL':
        return{
            
        }
        default:
        return state;
    }
  };