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
// import Rating from '@material-ui/lab/Rating';
import ShareIcon from '@material-ui/icons/Share';
import AverageRating from '../../components/AverageRating/AverageRating';
import UserRating from '../../components/UserRating/UserRating';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
// import ReviewBody from '../../components/ReviewBody/ReviewBody';
import useStyles from './styles';
const productID = '607dd307a8105c71a0c27959';
const userName = 'Hugo Boss';
const userId = '607dd3077201dc5008c7f8ae';

const ItemDetailsPage = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get('/api/product/details')
        .then((res) => {
          const productArray = res.data;
          for (let i = 0; i < productArray.length; i++) {
            if (productArray[i]._id === productID) {
              setProduct(productArray[i]);
              setReview(productArray[i].reviews);
              // eslint-disable-next-line
              console.log(productArray[i]);
            }
          }
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };
    getProduct();
  }, []);

  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              SP
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
            </>
          }
          title={product.name}
          subheader='Exactly What You Are Looking For!'
        />
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.imageKey}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing={true} className={classes.flexContainer}>
  
          <AverageRating value={product.averageStars ? product.averageStars : 0} />
        
          <Box className={classes.box}>
            <Typography variant='h6'>${product.price}</Typography>
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
            <ReviewModal
              userName={userName}
              userId={userId}
              productId={product._id}
            />
          </Box>
        </CardActions>

        <Divider variant='middle' />
        {review.map((item, i) => (
          <CardContent key={i}>
            <Typography>Bill H.</Typography>
            <Typography>{item.created}</Typography>
            <UserRating rating={item.totalStars} />
            <Typography>{item.title}</Typography>
            <Typography paragraph>{item.description}</Typography>
            <Divider variant='middle' />
          </CardContent>
        ))}
        {/* {review.map((item, i) => (
          <CardContent key={i}>
            <Typography paragraph>{item.description}</Typography>
          </CardContent>
        ))} */}
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
