export const initialState = {
    data:{},
    spells: [],
    spellList:[],
    spellData:{},
    isFetching: false,
    error: ''
  };
  
  export const spellsReducer = (state = initialState, action) => {
    switch (action.type) {
        //main spell list
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
        //spell details
        case 'FETCH_SPELLDETAILS_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_SPELLDETAILS_SUCCESS':
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                spellData: action.payload,
                error: ''
            };
        case 'FETCH_SPELLDETAILS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        //personal list managements
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