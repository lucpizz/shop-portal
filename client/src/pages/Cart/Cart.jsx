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
  const [quantity, setQuantity] = useState({
    id: '',
    qty: '',
  });
  const [list, setList] = useState([]);

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
  function getCart () {
    // Pointing temporary to product until cart api has something for testing
    axios
      .get('/api/product/')
      .then((res) => {
        setList(res.data);
      })
      .catch(); 
  };

  // Update quantity
  function handleChange(value, key) {
    setQuantity({
      ...quantity,
      [key]: value,
    });
  }
 

  // Remove item from cart
  function handleRemove(id, Transition) {
   axios.delete('/api/product/' + id).then(() => {
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

 // Do We need it?  Total number of item
 function sumTotalItems(list) {
  let total = 0;
  ItemsNumber = list.length;
  }

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
                image={item.imageUrl}
                title={item.imageKey}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component='h4' variant='h4'>
                    {item.name}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    {item.description}
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
                      {/* Stock quantity is called quantity in the product model */}
                      {getOptionsArray(item.quantity).map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <IconButton
                    aria-label='delete'
                    onClick={() => handleRemove(item._id, GrowTransition)}>
                    <DeleteForeverIcon />
                  </IconButton>
                  <Snackbar
                    open={state.open}
                    autoHideDuration={4000}
                    anchorOrigin={{vertical: 'top', horizontal: 'center' }}
                    onClose={handleClose}
                    TransitionComponent={state.Transition}
                    message='Item removed from your cart'
                    key={state.Transition.name}
                  />
                  <Typography color='textSecondary' align='right' variant='h6'>
                    <AttachMoneyIcon /> {item.price}
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
