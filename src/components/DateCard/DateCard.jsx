import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import lastWorkDay from '../../assets/Last-day-1.png';
import DatePicker from '../../components/DatePicker/DatePicker.jsx';

export default function MediaCard({lwd, setLwd}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={lastWorkDay}
        title="last work day"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Last Working Day
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Please select a preferred date. Selected date should not be a weekend or a national holiday.
        </Typography>
      </CardContent>
      <CardActions>
        <DatePicker lwd={lwd} setLwd={setLwd}/>
      </CardActions>
    </Card>
  );
}
