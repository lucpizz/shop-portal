import React from 'react';
import ProductsList from '../../__mock__/ProductsList';
import {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from '@material-ui/core';

const Shop = () => {
  //   const {title, price, description, imgUrl } = ProductsList;
  return (
    <>
      {ProductsList
        ? ProductsList.map((product, key) => {
            <Card key={key}>
              <CardHeader title={product.title} subheader={product.price} />
              <CardMedia style={{ height: '200px' }} image={product.imgUrl} />
              <CardContent>
                <Typography variant='body2' component='p'>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>ADD TO CART</Button>
                <Button size='small'>DETAILS</Button>
              </CardActions>
            </Card>;
          })
        : null}
    </>
  );
};

export default Shop;
