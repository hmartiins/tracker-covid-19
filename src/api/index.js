import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
   try {
      const { data: {confirmed, deaths, recovered, lastUpdate} } = await axios.get(url)

      return {
         confirmed,
         deaths,
         recovered,
         lastUpdate,
      };
      
   } catch (err) {
      console.error('Algo deu errado ao carregar os dados'); 
   }
}
export const fetchUpdateDaily = async () =>{
   try {
      const { data } = await axios.get(`${url}/daily`);
      
   } catch (err) {
      console.error('Algo deu errado ao carregar os dados');
   }
}