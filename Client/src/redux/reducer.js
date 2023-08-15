import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, FILTERANDORDER } from "./actions";


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
        };                                          
        /* case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            } */
            
        /* case REMOVE_FAV:
            const filtered = state.myFavorites.filter((char)=> parseInt(char.id) !== parseInt(payload))
        return {
            ...state, 
            myFavorites: filtered
        } */
        case REMOVE_FAV:
         return { ...state, myFavorites: payload };
        
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
        case FILTERANDORDER:
            let orderAndFilterFavs = [...state.allCharacters]
    
            if(payload.filter !== "") {
                orderAndFilterFavs =  orderAndFilterFavs.filter(character => character.gender == payload.filter)
            }
    
            if(payload.order == "A") {
                orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => a.id - b.id)
            } else if(payload.order == "D") {
                orderAndFilterFavs = orderAndFilterFavs.sort((a, b) => b.id - a.id)
            }
    
            return {
                ...state,
                myFavorites: orderAndFilterFavs
            }
        default:
            return {...state}
    }
}
export default rootReducer;