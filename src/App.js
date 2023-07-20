import './App.css';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
//!Importando componentes
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import Form from './components/form/Form.jsx'
import Favorites from "./components/favorites/Favorites";
import About from './components/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Backgraund from './components/background/Background';


function App() {
   const [characters, setCharacters] = useState([]);
   let [login, setLogin] = useState(false)
   let location = useLocation()
   let navigate = useNavigate()

   const handleLogin = (userData) => {
      const miEmail = "hola@gmail.com"
      const miPass = "Hola123"

      if(userData.email === miEmail && userData.password === miPass) {
         setLogin(true)
         navigate("/home")
      } else {
         alert(`Usuario o contraseña incorrecta`)
      }
   }

   const logOut = () => {
      setLogin(false)
   }

   useEffect(() => {
      !login && navigate("/")
   }, [login])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if(!characters.find(char => char.id === data.id)){
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         }else{
            alert(`Ya existe el personaje con el id ${id}`)
         }
      }).catch((err) => console.log(err) )
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         {/* <Nav onSearch={onSearch}/> */}
         <Backgraund>estoy aca</Backgraund>
         {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>
            <Route path= "/" element= {<Form handleLogin={handleLogin}/>} />
            <Route path= "/home" element= {<Cards characters={characters} onClose={onClose} />} />
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path= "/about" element={<About />} />
            <Route path= "/detail/:id" element= {<Detail />} />         
         </Routes>
         
      </div>
   );
}

export default App;
// characters={characters}
