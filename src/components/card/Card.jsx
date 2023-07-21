import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
//import {connect} from "react-redux"
import { addFav,removeFav } from '../../redux/actions';

function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch();/// esto va permite a los componentes funcionales hacer dispatch
   
   const myFavorites = useSelector(state => state.myFavorites) // trae el estado global al componente

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      console.log(isFav);
      dispatch(isFav ? removeFav(id) : addFav({
         id, status, species, gender, origin, image
      })) // hacemos un dispatch aca
      setIsFav(!isFav)
    }
   const handleClose = () => {
      onClose(id)
      dispatch(removeFav(id)) // y otro dispach aca
   }

   return (
      <div className={style.container}>
       <div className={style.botones}>
         
         {
         isFav ? (
            <button style={{color: "red"}} onClick={handleFavorite}>❤️</button>
         ) : (
            <button style={{color: "red"}} onClick={handleFavorite}>O</button>
         )
      }
         
         
         {onClose &&<button style={{color: "red"}} onClick={ handleClose} >X</button>}
         
       </div>
       
       <Link to={`/detail/${id}`}><h2 className={style.titleName}>{name}</h2></Link>
         <h2 className= {style.h2}>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img className= {style.img} src={image} alt='' />
      </div>
   );
}
/* const mapStateToProps = (state) => {
   return {
     myFavorites: state.myFavorites
   }
 } */
 
 /* const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character))
     }, 
     removeFav : (id) => {
       dispatch(removeFav(id))
     }
   }
 } */
 // mapStateToProps, mapDispatchToProps
 export default /* connect(mapStateToProps,mapDispatchToProps) */Card;



