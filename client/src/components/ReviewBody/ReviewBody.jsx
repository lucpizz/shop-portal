// import React, { useState, useEffect } from 'react';
import React from 'react';
import {
  Card,
  Container,
  // Divider,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import UserRating from '../../components/UserRating/UserRating';
import useStyles from './styles';
// import axios from 'axios';

const ReviewBody = () => {
  const classes = useStyles();

  // const [review, setReview] = useState([]);

  // useEffect(() => {
  //   const getReview = () => {
  //     axios
  //       .get('/api/reviews/')
  //       .then((res) => {
  //         setReview(res.data);
  //       })
  //       // eslint-disable-next-line
  //       .catch((err) => console.log(err));
  //   };
  //   getReview();
  // }, []);

  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      {/* {review.map((item, i) => ( */}
        <Card className={classes.card}>
          <Typography>Bill H.</Typography>
          <Typography>August 23, 2020</Typography>

          <UserRating />

          <Typography paragraph>Test Test</Typography>
        </Card>
      {/* ))} */}
    </Container>
  );
};

export default ReviewBody;
