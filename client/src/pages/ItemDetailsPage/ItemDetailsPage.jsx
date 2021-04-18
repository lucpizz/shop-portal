import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AverageRating from '../../components/AverageRating/AverageRating';
import UserRating from '../../components/UserRating/UserRating';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
import useStyles from './styles';

const ItemDetailsPage = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get('/api/product/')
        // .get('/sku/:sku')
        .then((res) => {
          setProduct(res.data);
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };
    getProduct();
  }, []);

  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      {product.map((item, i) => (
        <Card className={classes.card} key={i}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                SP
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </IconButton>
            }
            title={item.name}
            subheader='Exactly What You Are Looking For!'
          />
          <CardMedia
            className={classes.media}
            image={item.imageUrl}
            title={item.imageKey}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {item.description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>
            <Box className={classes.box}>
              <AverageRating
                rating={item.averageStars ? item.averageStars : 0}
              />
            </Box>
            <Box className={classes.box}>
              <Typography>${item.price}</Typography>
            </Box>
            <Box className={classes.box}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}>
                Add to Cart
              </Button>
            </Box>
            <Box className={classes.box}>
              <ReviewModal />
            </Box>
          </CardActions>

          <Divider variant='middle' />
          {item.reviews.map((review, j) => (
          <CardContent key={j} >
            <Typography>Bill H.</Typography>
            <Typography>{review.created}</Typography>
            <UserRating rating={review.totalStars}/>
            <Typography>{review.title}</Typography>
            <Typography paragraph>
            {review.description}
            </Typography>
            <Divider variant='middle' />
          </CardContent>
          ))}
          
        </Card>
      ))}
    </Container>
  );
};

export default ItemDetailsPage;
