import React, { useState, useEffect } from 'react';
import ShowCat from './components/ShowCat/ShowCat';
import './App.scss';
import axios  from 'axios';

const App = () => {

  const [getCat, setGetCat] = useState([]);//array vacío porque es un array de objetos. 
  
  useEffect(() => { //Esta función llama newCat que hace que cada onClik del evento cambie de imgagen
    newCat()
  }, []);

  useEffect(() => {
    console.log('My Cat:', getCat);
  }, [getCat]);


const newCat = () => {
  axios.get("https://api.thecatapi.com/v1/images/search")
  .then(res => {
    setGetCat(res.data);
  })
  .catch(err => alert(`Error! ${err}`));
}

    return (
      <div className="app">
        {
        getCat.map(cat => {
          return (
            <ShowCat key={cat.id} nombre={cat.breeds}>
                <img src={cat.url}/>
              <button className="button" onClick={() => newCat()}>
                Show New Cat!
              </button>
            </ShowCat>
        )
      })
    }
    </div>
  );
}

export default App;
