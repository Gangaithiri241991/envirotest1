import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom'
import img from "./doctor_click.png"
import img1 from './school_pnt.png'

export default function MaterialCard(){
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <div><img src={img}/>
        
          </div>
          Doctor click away has been designed to connect with doctors
          <p><NavLink to="/"><Button variant="contained" >Learn Above</Button></NavLink></p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
  );
}
