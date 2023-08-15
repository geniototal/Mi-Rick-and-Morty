
import Card from '../card/Card';
import style from './Cards.module.css';
export default function Cards(props) {
   //const characters = useSelector((state)=> state.characters) // aqui es donde se subscribe el componente a l store
   return (
   <div className={style.container}>
      {props.characters.map(
         ({ id, name, status, species, gender, origin, image })=> {
         return <Card 
         key = {id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         /* origin={origin.name} */
         image={image}
         onClose={props.onClose}/>
      })}
   </div>);
}
