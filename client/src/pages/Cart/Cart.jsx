import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core/';
import useStyles from './styles';
import imgExample from './images/exampleimage.png';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';

// data for testing
const items = [
  {
    id: 11,
    ProductName: 'Item 1',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
    Price: '$14.99',
    stockCount: 5,
  },
  {
    id: 22,
    ProductName: 'Item 2',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
    Price: '$69.69',
    stockCount: 12,
  },
  {
    id: 33,
    ProductName: 'Item 3',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
    Price: '$1,000,000.00',
    stockCount: 20,
  },
  {
    id: 44,
    ProductName: 'Item 3',
    Description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
    Price: '$1,000,000.00',
    stockCount: 10,
  },
];


const Cart = () => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState({
    id: '',
    qty: '',
  });
  const [list, setList] = useState(items);

  function handleChange(value, key) {
    setQuantity({
      ...quantity,
      [key]: value,
    });
  }

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  // Populating dropdowns
  const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i + 1);
    }
    return array;
  };

  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          {items.map((item, i) => (
            <Card className={classes.root} key={i}>
              <CardMedia
                className={classes.image}
                image={imgExample}
                title={item.ProductImage}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='h4' variant='h4'>
                    {item.ProductName}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    {item.Description}
                  </Typography>
                  <FormControl
                    variant='outlined'
                    className={classes.formControl}>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Quantity
                    </InputLabel>
                    <NativeSelect
                      labelId={item.id}
                      name={item.id}
                      defaultValue={quantity}
                      onChange={(e) => {
                        handleChange(e.target.value, e.target.name);
                      }}>
                      {getOptionsArray(item.stockCount).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <IconButton
                    aria-label='delete'
                    onClick={() => {
                      handleRemove(item.id);
                      console.log(item.id);
                    }}>
                    <DeleteForeverIcon />
                  </IconButton>
                  <Typography color='textSecondary' align='right' variant='h6'>
                    {item.Price}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.checkout}>
            <CardContent>
              <Typography
                className={classes.title}
                color='textPrimary'
                gutterBottom>
                Order Summary
              </Typography>
              <Typography variant='h6' component='p'>
                Subtotal: $
              </Typography>
              <Typography variant='h6' component='p'>
                Shipping: $
              </Typography>
              <Typography variant='h4' component='p'>
                Total: $
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='large'
                color='primary'
                variant='contained'
                fullWidth>
                Checkout
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
