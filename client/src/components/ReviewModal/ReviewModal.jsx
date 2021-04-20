import React from 'react';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
} from '@material-ui/core/';
import SetRating from '../SetRating/SetRating'
import useStyles from './styles';


const ReviewModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postReview = async (rating, title, description) => {
    try {
      await axios.post('/api/reviews', {
        name = props.userId,
        product = props.productId,
        totalStars = rating,
        title = title,
        description = description
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Box className={classes.box}>
        <Button
          onClick={handleOpen}
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}>
          Review this item
        </Button>
      </Box>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Review Your Product</h2>
            {/* <Box className={classes.box}> */}
            <SetRating />
            {/* </Box> */}
            <TextField
              id='message'
              margin='normal'
              label='Your Review'
              multiline
              required
              fullWidth
              rows={6}
              variant='outlined'
            />
            <Button
              onClick={postReview()}
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}>
              Submit
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReviewModal;