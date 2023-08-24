// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

//  function ImgMediaCard() {
//   return (
//     <Card className='card1' sx={{ maxWidth: 400 }}>
//       <CardMedia className='black'
//         component="img"
//         alt="green iguana"
//         height="250"
//         image="download.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//         Black Demon
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           a stranded family on a crumbling oil rig in Baja faces off against a vengeful megalodon shark.
//         </Typography>
//       </CardContent>
      
//     </Card>
    
//   );
// }
// export default ImgMediaCard;
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Moviedata } from '../constant/moviedata';
import {Link}from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {


    const[movieData,setmovieData]=useState();

   

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'a486ff175bmsh9332c6c8e28ee38p19f077jsn2c6904fb5e55',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

async function getMoviedata(){
    try {
        const response = await axios.request(options);
        console.log(response.data);
        setmovieData(response.data);
    } catch (error) {
        console.error(error);
    }
}
useEffect(()=>{getMoviedata();},[]);

  return (
    <Grid conatiner spacing={2}>
        {movieData&&
        movieData.map((movie,index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Link to={'/movie/${movie.id}'}>
                    <Card className='cards'>
                        <CardMedia
                        component="img"
                        height="300"
                        width="300"
                        image={movie.image}
                        alt={movie.title}
/>
<CardContent>
    <Typography variant='h6'>{movie.title}</Typography>

</CardContent>
                        </Card>
                </Link>
        
    </Grid>
)

)
}
</Grid>
  )}

