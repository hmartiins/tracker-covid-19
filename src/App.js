import React from 'react';

import Cards from './components/Cards/cards.js'
import Country from './components/Country/country.js'
import Graphics from './components/Graphics/graphics.js'

import { fetchData } from './api';

import './global.css';

class App extends React.Component{
   
   async componentDidMount() {
      const data = await fetchData();
      console.log(data);
   }

   render(){

      return(
         <div className="container">
            <Cards />
            <Country />
            <Graphics />
         </div>
      );
   }
}

export default App;