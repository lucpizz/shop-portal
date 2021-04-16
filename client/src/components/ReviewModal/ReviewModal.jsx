import React from 'react';
import {
  Backdrop,
  Button,
  Fade,
  Modal
} from '@material-ui/core/';
import useStyles from './styles';


const ReviewModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        type='submit'
        variant='contained'
        color=''
        className={classes.submit}>
        Review this item
      </Button>
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
            <p id='transition-modal-description'>Review content goes here.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReviewModal;