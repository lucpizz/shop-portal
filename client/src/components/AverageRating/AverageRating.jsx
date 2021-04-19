import React from 'react';
import Rating  from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

const AverageRating = (props) => {
const [value] = React.useState(props.rating);
  return (
      <>
        <Typography component="legend">Average Rating</Typography>
        <Rating name="read-only" value={value} readOnly />
      </>
  );
}

export default AverageRating;