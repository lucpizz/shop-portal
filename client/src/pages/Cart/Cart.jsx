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
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  // For Toast
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // Call update cart list
  useEffect(() => {
    getCart();
  }, []);

  
  // For Api call
  function getCart() {
    const user = '2185a8607b2ccd437004490d'; // FOR TESTING
    const status = 'Not processed';
    axios
      .get(`/api/cart/${user}/${status}`)
      .then((res) => {
        let newTotal = 0;
        setCart(res.data[0]);
        setList(res.data[0].products); // Push each product in an array
        newTotal = grandTotal(res.data[0].products);
        setTotal(newTotal);
      })
      .catch((error) => console.log(error));
  }

  // Update quantity
  function handleChange(id, event) {
    const newList = list.slice(0);
    let newCart = cart;
    const productIndex = list.findIndex((item) => item._id === id);
    let unitPrice = newList[productIndex].product.price; // Price by unit
    let totalUnits = Number(event.target.value); // New number of item
    let newTotal = (Math.round(totalUnits * unitPrice * 100) / 100).toFixed(2); // Calculation with rounding up to 2 decimals
    // Populate arrays with new numbers
    newList[productIndex].quantity = totalUnits;
    newList[productIndex].totalPrice = newTotal;
    newCart.products[productIndex].quantity = totalUnits;
    newCart.products[productIndex].totalPrice = newTotal;
    setList(newList);
    setCart(newCart);
    //Calling function to update db
    updateCart(newCart, cart._id);
  }

  // Api call to update the cart after new quantity
  function updateCart(cart, cartId) {
    axios
      .put(`/api/cart/${cartId}`, cart)
      .then(() => {
        getCart();
      })
      .catch((error) => console.log(error));
  }

  // TO DO: Remove item from cart
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

  function grandTotal(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum = sum + list[i].totalPrice;
    }
    return sum;
  }

  const submitOrder = async () => {
    try {
      // const results = await axios.post('/api/order', {
      //   list,
      // });
      await axios.post('/api/order', {
        user: '2185a8607b2ccd437004490d',
        total,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
                      handleRemove(item._id, cart._id, GrowTransition);
                      console.log('remove', item._id);  // FOR TESTING
                    }}>
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
                Subtotal: ${''}
                {total}
              </Typography>
              <Typography variant='h6' component='p'>
                Shipping: $0
              </Typography>
              <Typography variant='h4' component='p'>
                Total: ${''}
                {total}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='large'
                color='primary'
                variant='contained'
                onClick={submitOrder}
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
