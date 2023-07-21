import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const inicialState = {    
    myFavorites: [],
    allCharacters:[],
}

const rootReducer = (state= inicialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }
            
        case REMOVE_FAV:
            const filtered = state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(payload))
        return {
            ...state, 
            myFavorites: filtered
        }
        case FILTER:
            const filter = state.allCharacters.filter((char)=> char.gender === payload)
            return {
                ...state,
                myFavorites: filter 
            }
        case ORDER:
            let orderCharacters = state.allCharacters
            if (payload === "A") {
            
                   orderCharacters.sort((x, y) => x.id - y.id)
            }
            if (payload === "D") {
               
                    orderCharacters.sort((x, y) => y.id - x.id)
                }
            return {
                ...state, 
                myFavorites: orderCharacters   
            }
        default:
            return {...state}
    }
}
export default rootReducer;