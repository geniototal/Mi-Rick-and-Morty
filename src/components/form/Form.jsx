import {useState} from 'react';
import styles from './form.module.css'
const validate = (userData, setErrors, errors) => {
    if(! userData.email) {
        setErrors({...errors, email: "Email vacio"})
    } else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
            setErrors({...errors, email: ""}) 
        } else setErrors({...errors, email: "Email inválido"})
    }
    
}
//regex password   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
const Form = ({handleLogin}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        const property = event.target.name;
        const valor = event.target.value;

        setUserData({...userData, [property]: valor})
        validate({...userData, [property]: valor}, setErrors, errors)
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // me recagues la pagina en evento submit
        
        if(errors.email ==="" && errors.password === "") {

            handleLogin(userData)
        }
        
    }
    return (
        <div className= {styles.contenedor}>
        <div className= {styles.toggle}>
            <span className= {styles.span}> Crear Cuenta</span>
        </div>
        <div className={styles.formulario}>
            <h2 className= {styles.h2}>Iniciar Sesión</h2>
        <form onSubmit = {handleSubmit}>
            <div>
                {/* <label htmlFor="email">Email</label> */}
                <input
                    className= {styles.input} 
                    type="text"
                    placeholder="Usuario" required 
                    name= "email" 
                    value= {userData.email} 
                    onChange= {handleChange}/>
            </div>
            <div>
                {/* <label htmlFor="password">Password</label> */}
                <input 
                    className= {styles.input}
                    type="text"
                    placeholder="Contraseña" required 
                    name="password" 
                    value= {userData.password} 
                    onChange= {handleChange}/>
            </div>
            <button className= {styles.submit}>Submit</button>
        </form>
        </div>
        <div className={styles.p}>
            <p>Olvide mi Contraseña?</p>
        </div>
        </div>
    )
}
export default Form;