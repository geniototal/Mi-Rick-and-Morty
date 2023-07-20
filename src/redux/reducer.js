import { ADD_FAV, REMOVE_FAV } from "./actions";


const inicialState = {    
    myFavorites: [],
    allCharacters:[],
}

const rootReducer = (state= inicialState, {type, payload}) => {
    console.log(payload) //-> {type: , payload: }
    switch (type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites: [...state.myFavorites, payload]
            }
            
        case REMOVE_FAV:
            const filtered = state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(payload))
        console.log(filtered)
        return {
            ...state, 
            myFavorites: filtered
        }
        default:
            return {...state}
    }
}
export default rootReducer;