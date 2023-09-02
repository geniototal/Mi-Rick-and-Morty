import style from './favorites.module.css';
import { useSelector } from "react-redux"
import Cards from "../cards/Cards"
//import { filterCards, orderCards} from "../../redux/actions"
import * as actions from '../../redux/actions';
import { useDispatch } from "react-redux"
import { useState } from "react"

function Favorites () {
    let [state, setState] = useState({
        order: "",
        filter: "",
    })
    const favorito = useSelector((state)=> state.myFavorites)
    //console.log(favorito)
    //const [ aux, setAux ] = useState(false);
    const dispatch = useDispatch();
    
    const handleChange = e => {
        let newState = {
            ...state,
            [e.target.name]: e.target.value
        }

        setState(newState)
        dispatch(actions.filterAndOrder(newState))
    }
    /* const handleOrder= (e) => {
        dispatch(actions.orderCards(e.target.value));
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(actions.filterCards(e.target.value))
    } */
    return (
        <div className={style.content}>
            
            <div className={style.container}>
                <h3 className = {style.h3}>Favoritos</h3>
                <div className= {style.container_select}>
                    <select className= {style.select} name="order" id="" onChange = { handleChange }>
                        <option className= {style.option} value="A">Ascendente</option>
                        <option className= {style.option} value="D">Descendente</option>
                    </select>
                    <select className= {style.select} name="filter" id="" onChange = { handleChange }>
                        <option className= {style.option} value="">All genders</option>
                        <option className= {style.option} value="Male">Male</option>
                        <option className= {style.option} value="Female">Female</option>
                        <option className= {style.option} value="Genderless">Genderless</option>
                        <option className= {style.option} value="unknown">unknown</option>
                    </select>
                </div>
            </div>
            <Cards characters={favorito}/>
            
        </div>
    )
}

/* const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
} */

export default Favorites