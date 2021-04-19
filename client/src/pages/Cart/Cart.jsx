/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import axios from 'axios';

//For Toast
function GrowTransition(props) {
  return <Grow {...props} />;
}

const Cart = () => {
  const classes = useStyles();
  // Setting components' initial state

  const [list, setList] = useState([]);
  const [cart, setCart] = useState({})

  // For Toast
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // Call update cart list
  useEffect(() => {
    getCart();
  }, []);

  // useEffect(() => {
  //   console.log(list);
  // }, [list]);

  // Api call to get the cart
  function getCart(id) {
    const user= '607b2ccd2185a8437004490d';  // FOR TESTING
    const status= 'Not processed';
    axios
      .get(`/api/cart/${user}/${status}`)
      .then((res) => {
        setCart(res.data[0])
        setList(res.data[0].products); // Push each product in an array 
        console.log("old", res.data[0].products); 
        console.log("cart", res.data[0]);     
      })
      .catch((error) => console.log(error));
  }

  // Update quantity
  function handleChange(id, event) {    
    const newList = list.slice(0);
    const product = list.findIndex((item) => item._id === id);
    newList[product].quantity = Number(event.target.value);
    setList(newList); 
    const cartId= cart._id
    console.log("my newlist", newList); 
    console.log(cartId);  
  }

// Api call to get the cart
function updateCart(list, cardID) {
  const user= '607b2ccd2185a8437004490d';  // FOR TESTING
  const status= 'Not processed';
  axios
    .put(`/api/cart/${user}/${status}`)
    .then((res) => {
      setCart(res.data[0])
      setList(res.data[0].products); // Push each product in an array 
      console.log("old", res.data[0].products); 
      console.log("cart", res.data[0]);     
    })
    .catch((error) => console.log(error));
}


  // Update Total Price
  const [total, setTotal] = useState(0);

  // Remove item from cart
  function handleRemove(id, cartId, Transition) {
    axios.delete(`/api/cart/${cartId}/${id}`).then(() => {
      getCart();
      // Update Toast State
      setState({
        open: true,
        Transition,
      });
    });
  }

  // For Toast closing
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  // TO DO: Total Calculation
 function sumTotalAmount(list) {
    let total = 0;
    for (var i = 0; i < list.length; i++) {
      total += list[i].price * parseInt(list[i].quantity);
    }
    setList({
      totalPrice: total
    });
  }

//  // Do We need it?  Total number of item
//  function sumTotalItems(list) {
//   let total = 0;
//   ItemsNumber = list.length;
//   }

  // Populate dropdowns
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
          {list.map((item, i) => (
            <Card className={classes.root} key={i}>
              <CardMedia
                className={classes.image}
                image={item.product.imageUrl}
                title={item.product.imageKey}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='h4' variant='h4'>
                    {item.product.name}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    {item.product.description}
                  </Typography>
                  <br />
                  <FormControl
                    variant='outlined'
                    className={classes.formControl}>
                    <InputLabel id='demo-simple-select-outlined-label'>
                      Quantity
                    </InputLabel>
                    <NativeSelect
                      labelId={item.id}
                      name={item.id}
                      defaultValue={item.quantity}
                      onChange={(e) => {
                        handleChange(item._id, e);
                      }}>
                      {/* Stock quantity is called quantity in the product model */}
                      {getOptionsArray(item.product.quantity).map((num) => (
                        <option key={num} value={num}>
                          {' '}
                          {num}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <IconButton
                    aria-label='delete'
                    onClick={() => {
                      handleRemove(item._id, GrowTransition);
                      console.log("remove",item._id)}}>
                    <DeleteForeverIcon />
                  </IconButton>
                  <Snackbar
                    open={state.open}
                    autoHideDuration={4000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message='Item removed from your cart'
                    key={state.Transition.name}
                  />
                  <Typography color='textSecondary' align='right' variant='h6'>
                    <AttachMoneyIcon /> {item.totalPrice}
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
                Total: ${' '}
                {parseFloat(list?.reduce((prevValue, curItem) => {
                  return prevValue + (curItem.price * curItem.userQuantity);
                }, 0), 2)}
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
