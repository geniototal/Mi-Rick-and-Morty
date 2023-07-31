import styled from 'styled-components'

export const NavContainer = styled.nav`
    .h1 {
        color: white;
        font-size: 3vw;
    }
    
    position: fixed; 
    z-index: 2;
    top:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(0,0,0, .7);
    box-shadow: 0 10px 4px #000;
    margin-top: 1rem;
    margin-left: 3rem;
    margin-right: 3rem;
    padding: 0 1rem;
    height: 4em;
    width: 90vw;
    border-radius: 2rem;
    
   
    .links {
        
        
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
       
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        display: block;
        transition: all .5s ease;
    }
    @media(min-width: 768px) {
        .h1 {
            font-size: 1.5vw;
        }
        .links {
                position: initial;
                display: flex;
                column-gap: 1rem;
                align-items: center;
                height: 4rem;
            }
        }
    .links.active {
        width: 20%;
        display: block;
        position: absolute;
        margin-left: .5rem;
        /* margin-right: auto; */
        top: 8em;
        left: -2.5em;
        right: 0;
        text-align: center;
        
    }
    
    
    .button {  
        /* text-align: center; */
        font-family: var(--second-font);
        height: 100%;
        padding: 1.3rem 0rem;
        margin-right: .8em;
        color: var(--title-color);
        cursor: pointer;
        transition: 0.5s;
    /* &:after {
        content: '';
        width: 2%;
        height: 2px;
        color: black;
        background-color: var(--title-color);
        position: initial;
        left: 260px;
        bottom: 630px;
        transition: width .4s;
    }
   &:hover::after {
    
    width: 5%;
  }   */
    &:hover {
        /* background: rgba(244, 239, 239, 0.7);
        width: 8vw;
        height: 5vh; 
        margin-right: .8em;
        border-radius: 1em; */
        font-weight: 600;
        color: #00ff40
    }
} 
    
    .random {
        position:relative;
        border-radius: 0.5em;
        margin-left: .1rem;
        margin-top: 1rem;
        width: 90px;
        height: 2.8rem;
        padding: 0.3em;
        border: none;
        color: rgb(12, 20, 69);
        font-family:'Courier New', Courier, monospace;
        font-weight: 700;
        font-size: 1em;
        transform-style: preserve-3d;
        transform: translateZ(-20px) rotateX(20deg);
        
    &:hover {
      background-color: #00ff40;
      cursor: pointer;
    }
    }
    .contain_button {
        display: flex;
        justify-content: space-around;
    }

`
export const BurgerContainer = styled.div `
    
    @media(min-width: 768px) {
            display: none;
            color: blue
    }  
`
export const BgDiv = styled.div `
    position: absolute;
    background-color: rgba(0,0,0, .7);
    top: -900px;
    left: -1000px;
    width: 100%;
    height: 100%;
    transition: all .6s ease;
    &.active {
        border-radius: 1rem;
        top: 6em;
        left: -3em;
        width: 120px;
        height: 400px;
        z-index: -1;
    }
`
 
