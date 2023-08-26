import { AboutContainer} from './aboutStyled'; 
import img from './mi-foto.jpg'
import img_2 from './rick_2.jpg'
import img_3 from './rick_3.jpg'
import img_1 from './rick_1.jpg'
const About = () => {
    return (
        <>
            <AboutContainer>
                <div className='contenedor'>
                    <div className='cubo'>
                        <div className="container_miPerfil cara_1">
                            <h2>Diseño y desarrollo</h2>
                            <div className="container_text">
                                <img src= {img} alt="mi-foto" />
                                <div className='texto'>
                                    <h3>Carlos Miguel Malissia</h3>
                                    <h3> Developer Full Stack</h3>
                                </div>
                            </div>
                            <h2>Datos de Contacto</h2>
                            <div>
                                
                                <h4>Tel o Whatsapp: +54-3548-507863</h4>
                                <h4>Github: geniototal</h4>
                                <h4>Website: www.geniototal.com</h4>
                                </div>
                                <div className="redes">
                                <h4>En redes:</h4>
                            
                            <div className="footer__social">
                  <a href="https://www.facebook.com/" target= "_blank" className="footer__social-link">
                     <i className="ri-facebook-line"></i>
                  </a>
                  <a href="https://www.instagram.com/" target= "_blank" className="footer__social-link">
                     <i className="ri-instagram-line"></i>
                  </a>
                  <a href="ttps://twitter.com/" target= "_blank" className="footer__social-link">
                     <i className="ri-twitter-line"></i>
                  </a>
                  <a href="https://www.youtube.com/" target= "_blank" className="footer__social-link">
                     <i className="ri-youtube-line"></i>
                  </a>
                  </div>
                  
               </div>
                        </div>
                        <div className="container_miPerfil cara_2">
                            <h2>Acerca del Sitio</h2>
                            <div className="container_text">
                                <img src= {img_2} alt="mi-foto" />
                                <div className='texto'>
                                    <h3>Este sitio, basado en la temática de Rick and Morty, es un proyecto de practica de todos los temas estudiados en el bootcam de Henry</h3>
                                </div>
                            </div>
                            <h2>Base de Datos</h2>
                            <h3 className="container_text">En este caso se consumio datos de la API-Rest de Rick and Morty</h3>
                            <span className="footer__copy">
                                &#169; Copyright GenioTotal. All rights reserved
                            </span>
                        </div>
                        <div className="container_miPerfil cara_3">
                            <h2>Front-end</h2>
                            <div className="container_text">
                                <img src= {img_3} alt="mi-foto" />
                                <div className='texto'>
                                    <h3>Para el front, se utilizo Node.js, JS, React y React-Redux</h3>
                                    <h3>Css puro, solo Css-Modules y Styles-Component</h3>
                                </div>
                            </div>
                            <h2>Detalles extras</h2>
                            <h3 className="container_text">Como extra se añadio alguna animacion en css, con transition,
                                perspective y animation-keyframe. Se utilizo tecnicas de CSS Responsive</h3>
                        </div>
                        <div className="container_miPerfil cara_4">
                            <h2>Back-end</h2>
                            <div className="container_text">
                                <img src= {img_1} alt="mi-foto" />
                                <div className='texto'>
                                    <h3>Para el back-end se utitizó Node js con Express</h3>
                                    <h3>como Server y enrutador</h3>
                                    <h3>Para users se utitizo DB Postgres en locahost o sea SQL con  Sequelize</h3>
                                </div>
                            </div>
                            <h2>Link de la api de Rick</h2>
                            <h3 className="container_text">https://rickandmortyapi.com/</h3>
                        </div>
                    </div>
                </div>
            </AboutContainer>
        </>
    );
}
export default About;