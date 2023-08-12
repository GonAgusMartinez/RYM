import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App () {
  let [characters, setCharacters] = useState([]);
  let [access, setAccess] = useState(false);
  const navigate = useNavigate();

  let userName = 'cuentasdechalo@gmail.com';
  let userPassword = 'Alalalon2';

  function login(userData) {
    if (userData.password === userPassword && userData.username === userName) {
       setAccess(true);
       navigate('/home');
    }
    else{
      alert('Aca no eh')
    }
  }

  const location = useLocation();

  const onSearch = (value) =>{

    fetch(`https://rickandmortyapi.com/api/character/${value}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const handleOnClose = (id) => {
    setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
  };

  let myStyle = { padding: '25px' };
  return (
    <div className='App' style={myStyle}>
      <div>
      { location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
        {/* <Nav onSearch={onSearch} /> */}
      </div>
      <hr />
      <Routes>
        {/* RUTA LOGIN */}
        <Route path='/' element={<Form login={login}/>} />

        {/* RUTA HOME */}
        <Route path='/home' element={
          <Cards
            characters={characters}
            onClose={handleOnClose}
          />
        }/>
        {/* RUTA ABOUT */}
        <Route path='/about' element={<About/>} />

        {/* RUTA DETAIL */}
        <Route path='/detail/:detailId' element={<Detail />} />

      </Routes>
      <div>
      </div>
    </div>
  )
}

export default App