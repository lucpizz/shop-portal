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

  // For Toast
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // Call update cart list
  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  // For Api call
  function getCart() {
    // Pointing temporary to product until cart api has something for testing
    axios
      .get('/api/product/')
      .then((res) => {
        const quantifiedList = res.data.map((item) => ({
          ...item,
          userQuantity: 1,
        }));
        setList(quantifiedList);
      })
      .catch((error) => console.log(error));
  }

  // Update quantity
  function handleChange(id, event) {
    const newList = list.slice(0);
    const product = list.findIndex((item) => item._id === id);
    newList[product].userQuantity = Number(event.target.value);
    setList(newList);
    console.log(id)
  }

  // Update Total Price
  // const [total, setTotal] = useState(0);

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
                      defaultValue={item.userQuantity}
                      onChange={(e) => {
                        handleChange(item._id, e);
                      }}>
                      {/* Stock quantity is called quantity in the product model */}
                      {getOptionsArray(item.quantity).map((num) => (
                        <option key={num} value={num}>
                          {' '}
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
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
                Subtotal: ${''}
                {parseFloat(list?.reduce((prevValue, curItem) => {
                  console.log(prevValue, curItem.price);
                  return prevValue + (curItem.price * curItem.userQuantity);
                }, 0), 2)}
              </Typography>
              <Typography variant='h6' component='p'>
                Shipping: $0
              </Typography>
              <Typography variant='h4' component='p'>
                Total: ${''}
                {parseFloat(list?.reduce((prevValue, curItem) => {
                  console.log(prevValue, curItem.price);
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
