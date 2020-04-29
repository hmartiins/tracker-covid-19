import React from 'react';

import Cards from './components/Cards/cards.js'
import Country from './components/Country/country.js'
import Graphics from './components/Graphics/graphics.js'

import { fetchData } from './api';

import './global.css';

class App extends React.Component{
   
   state = {
      data: {},
   }

   async componentDidMount() {
      const fetchedData = await fetchData();
      
      this.setState({ data: fetchedData });
   }
   render(){
      const { data } = this.state;
      return(
         <div className="container">
            <Cards data={data}  />
            <Country />
            <Graphics />
         </div>
      );
   }
}

export default App;