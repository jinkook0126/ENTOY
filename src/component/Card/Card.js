import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.css'

export default function SimpleCard() {

  return (
    <Card className="cardWrap">
      <CardContent>
      <Typography variant="h5" component="h2">
          Halla React!!
        </Typography>
      </CardContent>
    </Card>
  );
}