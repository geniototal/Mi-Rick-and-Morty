import style from './favorites.module.css';
import { useSelector } from "react-redux"
import Cards from "../cards/Cards"
import { filterCards, orderCards} from "../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Favorites () {
    
    const favorito = useSelector((state)=> state.myFavorites)
    const [ aux, setAux ] = useState(false);
    const dispatch = useDispatch();
    
    const handleOrder= (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    return (
        <div>
            <div className={style.container}>
            <select className= {style.select} name="" id="" onChange = { handleOrder }>
                <option className= {style.option} value="A">Ascendente</option>
                <option className= {style.option} value="D">Descendente</option>
            </select>
            <select className= {style.select} name="" id="" onChange = { handleFilter }>
                <option className= {style.option} value="Male">Male</option>
                <option className= {style.option} value="Female">Female</option>
                <option className= {style.option} value="Genderless">Genderless</option>
                <option className= {style.option} value="unknown">unknown</option>
            </select>
            </div>
            <h1>Favoritos</h1>
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