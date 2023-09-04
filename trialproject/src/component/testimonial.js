import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 328,
          height: 428,
        },
      }}
    >
     
      <Paper elevation={3} 
      
      
      />
      <Paper></Paper> 
      
      
  
      
    </Box>
    
      
      
  );
}