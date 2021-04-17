import React, { useState, useEffect } from 'react';
import {
  Card,
  Container,
  Divider,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import UserRating from '../../components/UserRating/UserRating';
import axios from 'axios';

const ReviewBody = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const getReview = () => {
      axios
        .get('/api/reviews/')
        .then((res) => {
          setReview(res.data);
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };
    getReview();
  }, []);

  return (
    <Container component='main' maxWidth='xs'>
      {review.map((item, i) => (
        <Card key={i}>
          <Typography>Bill H.</Typography>
          <Typography>August 23, 2020</Typography>

          <UserRating />

          <Typography paragraph>Test Test</Typography>
          <Divider variant='middle' />
        </Card>
      ))}
    </Container>
  );
};

export default ReviewBody;
