import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    // maxHeight: '80vh',
    // maxHeight: 500,
    // marginTop: theme.spacing(8),
  },
  card: {
    // maxWidth: 1000,
    // maxHeight: 300,
    // height: '50vh',
    marginTop: theme.spacing(2),
  },
  media: {
    margin: 'auto',
    maxWidth: 500,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  price: {

  },
}));

export default useStyles;
