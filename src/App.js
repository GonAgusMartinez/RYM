import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';


function App () {

  let [characters, setCharacters] = useState([]);

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
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
          onClose={handleOnClose}
        />
      </div>
    </div>
  )
}

export default App