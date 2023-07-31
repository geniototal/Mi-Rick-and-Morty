import React, {useState} from "react";
import SearchBar from "../searchBar/SearchBar";
//import style from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
import {NavContainer, BurgerContainer, BgDiv,} from './navStyled';
import Burger from "./Burger";

const Nav = (props) => {
    const navigate = useNavigate()
    const [clicked, setClicked] =useState(false)
    const handleClick = () => {
        setClicked(!clicked);
        
    }
    return <>
            
            <NavContainer>
                <h1 className="h1">Rick and Morty</h1>
                
                <div className={`links ${clicked ? 'active' : ''}`}>
                    
                    <h3 className="button" onClick={() => navigate("/home")}>Home</h3>
                    <h3 className="button" onClick={() => navigate("/about") }>About</h3>
                    <h3 className="button" onClick={() => navigate("/favorites")}>Favorites</h3>
                    <h3 className="button" onClick={() => navigate(-1)}>Atras</h3>
                    <h3 className="button" onClick={() => props.logOut()}>LogOut</h3>
                </div>
                <div className="contain_button">
                    <SearchBar onSearch={props.onSearch} />
                    <button className="random" onClick={() => props.onSearch(Math.ceil(Math.random() * 285) + 1)}>Random</button>
                </div>
                <BurgerContainer>
                    <Burger clicked= {clicked} handleClick= {handleClick}/>
                </BurgerContainer>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    }


export default Nav;

