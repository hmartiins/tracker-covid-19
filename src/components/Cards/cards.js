import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import classes from './cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
   
   console.log({ confirmed, recovered, deaths, lastUpdate });

   if(!confirmed){
      return 'Carregando...';
   }

   return(
      <div className={classes.container}>
         <Grid container justify="center" spacing={3}>
         <Grid 
            item 
            component={Card} 
            xs={12}
            md={3}
            className={[classes.card, classes.recovered].join(' ')}
         >
            <CardContent>
               <Typography color="textSecondary" gutterBottom >
                  Recuperados
               </Typography>
               <Typography variant="h5">
                  <CountUp 
                     start={0}
                     end={recovered.value}
                     duration={2.77}
                     separator=','
                  />
               </Typography>
               <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
               </Typography>
               <Typography variant="body2">
                  Número de casos recuperados
               </Typography>
            </CardContent>
         </Grid>
         <Grid 
            item 
            component={Card} 
            xs={12}
            md={4}
            className={[classes.card, classes.infected].join(' ')}
         >
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
            <Grid 
               item 
               component={Card} 
               xs={12}
               md={3}
               className={[classes.card, classes.deaths].join(' ')}
            >
               <CardContent>
                  <Typography color="textSecondary" gutterBottom >
                     Mortes
                  </Typography>
                  <Typography variant="h5">
                     <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={2.77}
                        separator=','
                     />
                  </Typography>
                  <Typography color="textSecondary">
                     {new Date(lastUpdate).toDateString()}
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