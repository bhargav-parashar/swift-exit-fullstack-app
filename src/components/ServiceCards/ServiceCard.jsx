import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Calendar from '../../assets/calendar.jpg';
import CheckStatus from '../../assets/check-status.png'
import { useNavigate } from "react-router-dom";


export default function ActionAreaCard({label, description, isSubmit}) {
    const navigate = useNavigate();
    const link = isSubmit ? '/resignation-page' : '';
  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardActionArea onClick={()=>navigate(link)} >
        <CardMedia
          component="img"
          height="140"
          image={ isSubmit ? Calendar : CheckStatus } 
          alt="resign timeline image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}