import { AboutContainer} from './aboutStyled'; 
import img from './mi-foto.jpg'
const About = () => {
    return (
        <>
            <AboutContainer>
                <h1> Este es mi perfil</h1>
                <img src= {img} alt="mi-foto" />
            </AboutContainer>
        </>
    );
}
export default About;