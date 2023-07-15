import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import style from './Detail.module.css'
const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({data}) => {
                if (!data.name) {
                    window.alert("No existe un personaje con ese id")
                } else {
                    setCharacter(data)
                }
            })
        }, 2000)
    }, [id])
    return !character.image ? <h1>Cargando su personaje...</h1>
    : (
    <div className={style.contenedor}>
        <div className={style.container}>
            <img src={character?.image} alt='' className= {style.img}/> 
            <h2>{character?.name}</h2>
            <div>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.origin?.name}</h2>
            </div>
        </div>
    </div>
    )
}
export default Detail;