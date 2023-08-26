import styled from 'styled-components';

export const AboutContainer = styled.div`
    h2 {
        color: white;
        margin-top: 1em;
        border-bottom: solid 1px;
        text-align: center;
        font-family: var(--second-font);
        
    }
    img {
        margin-left: 1rem;
        
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    h3 {
        
        padding-left: 1rem;
        padding-bottom: .5rem ;
        text-align: start;
    }
    
    .texto {
        margin-top: 4rem;
    }
   
   .contenedor {
    perspective: 2500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(50px)
   }
    .cubo{
    position: relative;
    transform-style: preserve-3d;
    width: 500px;
    /* left: 30%; */
   /*  height: 350px; */
    animation: rotar 6s linear infinite;
    transition: transform 2s;
}
    .container_miPerfil {
        position: absolute;
        
        background: rgba(0,20,30, .9);
        box-shadow: 0 10px 4px #000;
        margin: 7rem auto; 
        padding: 1rem 1rem;
        height: 30rem;
        width: 500px;
        border-radius: 2rem;
        border: 2px solid white;
    }
    
    .container_text {
        font-family: var(--second-font);
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        font-size: .9rem;
    }
    .cubo:hover{ animation-play-state:paused; }
    .cara_1{
    transform: translateZ(250px);
}
.cara_2{
    transform: rotateY(90deg) translateZ(250px);
}
.cara_3{
    transform: rotateY(180deg) translateZ(250px);
}
.cara_4{
    transform: rotateY(-90deg) translateZ(250px);
}
@keyframes rotar{
    from{
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
.redes {
    display: flex;
}
h4{
    padding-top: 0.4rem;
}
.footer__group,
.footer__social {
  display: flex;
  text-align: center;
  padding-top: 0.4rem;
  padding-left: 5rem;
}
.footer__group {
  flex-direction: column;
  margin-top: 5rem;
  
  align-items: center;
  row-gap: 2rem;
}
.footer__social {
  column-gap: 1.5rem;
}
.footer__social-link {
  color: var(--text-color);
  font-size: 1.25rem;
  transition: color .4s transform .4s;
}
.footer__social-link:hover {
  color: var(--title-color);
  transform: translateY(-.25rem);
}
.footer__copy {
  font-size: var(--smaller-font-size);
  color: var(--text-color);
  margin-left: 30%;
}
`