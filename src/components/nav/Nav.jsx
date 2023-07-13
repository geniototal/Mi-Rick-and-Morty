import React from "react";
import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css'
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
    const navigate = useNavigate()
    
        return <nav className={style.nav}>
            
            <SearchBar onSearch={props.onSearch} />
            <div className= {style.contButton}>
                <button className= {style.button} onClick={() => navigate("/home")}>HOME</button>
                <button className= {style.button} onClick={() => navigate("/about")}>About</button>
                <button className= {style.button} onClick={() => navigate(-1)}>Atras</button>
                <button className= {style.button} onClick={() => props.logOut()}>LogOut</button>
            </div>
        </nav>
    }


export default Nav;