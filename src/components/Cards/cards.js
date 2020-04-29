import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import classes from './cards.modules.css';

const Cards = ({ data: { confirmed, recoverd, deaths, lastUpdate }}) => {
   
   console.log({ confirmed, recoverd, deaths, lastUpdate });

   if(!confirmed){
      return 'Carregando...';
   }

   return(
      <div className={classes.container}>
         <Grid container justify="center" spacing={3}>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom >
                     Infectados
                  </Typography>
                  <Typography variant="h5">
                     <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2.77}
                        separator=','
                     />
                  </Typography>
                  <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
                  </Typography>
                  <Typography variant="body2">
                     Número de casos ativos
                  </Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom >
                     Recuperados
                  </Typography>
                  <Typography variant="h5">
                     REAL DATA
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                     REAL DATE
                  </Typography>
                  <Typography variant="body2">
                     Número de casos recuperados
                  </Typography>
               </CardContent>
            </Grid>
            <Grid item component={Card}>
               <CardContent>
                  <Typography color="textSecondary" gutterBottom >
                     Mortes
                  </Typography>
                  <Typography variant="h5">
                     REAL DATA
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                     REAL DATE
                  </Typography>
                  <Typography variant="body2">
                     Número de mortes
                  </Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   );
}

export default Cards;