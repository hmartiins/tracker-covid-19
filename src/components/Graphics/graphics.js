import React, { useState, useEffect } from 'react';

import { fetchUpdateDaily } from '../../api/index.js'

const Graphics = () => {
   const [dailyData, setDailyData] = useState({});

   useEffect(() =>{
      const fetchApi = async () =>{
         setDailyData(await fetchUpdateDaily());
      }

      fetchApi();
   });

   return(
      <h1>g</h1>
   );
}

export default Graphics;