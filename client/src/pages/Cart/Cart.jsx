import React from 'react'
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
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Quantity from '../../components/Quantity/Quantity'
// export default function SimpleSelect() {



// const [cart, setCart] = React.useState([]);
 


const Cart = () => {
    const classes = useStyles();
    // const [quantity, setQuantity] = React.useState('');
    // const handleChange = (event, item) => {
    //   // setQuantity(event.target.value);
    //   // eslint-disable-next-line
    //   console.log(event.target, item);
    // };


  const items = [
    {
      ProductName: 'Item 1',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
      Price: '$14.99',
    },
    {
      ProductName: 'Item 2',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
      Price: '$69.69',
    },
    {
      ProductName: 'Item 3',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
      Price: '$1,000,000.00',
    },
    {
      ProductName: 'Item 3',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis auctor nisl, quis tempus purus venenatis in.',
      Price: '$1,000,000.00',
    },
  ];
  
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
                        {/* <Select
                          labelId={item.i}
                          id={item.i}
                          value={item.Quantity}
                          onChange={() => handleChange(event.target.value)}>
                          <MenuItem value= '0'>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select> */}
                        <Quantity />
                      </FormControl>
                      <IconButton aria-label='delete'>
                        <DeleteForeverIcon />
                      </IconButton>
                      <Typography
                        color='textSecondary'
                        align='right'
                        variant='h6'>
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
}
export default Cart