import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import style from './Detail.module.css'
const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        setTimeout(() => {
            /* axios.get(`https://rickandmortyapi.com/api/character/${id}`) */
            axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({data}) => {
                if (!data.name) {
                    window.alert("No existe un personaje con ese id")
                } else {
                    setCharacter(data)
                }
            })
        }, 2000)
    }, [id])
    return !character.image ? <h1 className={style.h1}>Cargando su personaje...</h1>
    : (
        
        
        <div className={style.container}>    
            <div className={style.contenedor}>
                <div className={style.img}>
                    <img src={character?.image} alt='' className= {style.img}/>     
                </div>
                <div className={style.contenedor_texto}>
                    <div className={style.titleName}>{character?.name}</div>
                    <h2><u>Especie</u>: {character?.species}</h2>
                    <h2><u>Gender</u>: {character?.gender}</h2>
                    <h2><u>Status</u>: {character?.status}</h2>
                    <h2><u>Origin</u>: {character?.origin.name}</h2>
                    <h2><u>Location</u>: {character?.location.name}</h2>
                </div>
            </div>
            <div>
                <h2><u>Created</u>: {character?.created}</h2>
                <h2><u>Episodios en los que aparece</u>:</h2>
                <h2>{character?.episode.map(char => char.split("/")[5] + ', ')}</h2>
            </div>
                
            
        </div>
    
    )
}
export default Detail;