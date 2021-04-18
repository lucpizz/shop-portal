import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const SetRating = () => {
  const [value] = React.useState();

  // const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const getProduct = () => {
  //     axios
  //       .get('/api/product/')
  //       // .get('/sku/:sku')
  //       .then((res) => {
  //         setProduct(res.data);
  //       })
  //       // eslint-disable-next-line
  //       .catch((err) => console.log(err));
  //   };
  //   getProduct();
  // }, []);

  return (
    <div>
      <Box mb={3} borderColor="transparent">
        <Typography component="legend">Set Rating</Typography>
        {/* <Typography component="name">{item.name}</Typography> */}
        <Rating
          name="simple-controlled"
          value={value}
          required
          // onChange={(event, newValue) => {
          //   SetRating(newValue);
          // }}
        />
      </Box>
    </div>
  );
};

export default SetRating;
