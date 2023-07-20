import { connect } from "react-redux"
import Cards from "../cards/Cards"
function Favorites ({myFavorites}) {
    return (
        <div>
            <h1>Favoritos{console.log(myFavorites)}</h1>
            <Cards characters={myFavorites}/>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)