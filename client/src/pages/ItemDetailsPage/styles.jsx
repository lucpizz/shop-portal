import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    padding: theme.spacing(1),
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.secondary.main,
    // },
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   backgroundColor: green[500],
    // },
  },
  card: {
    margin: theme.spacing(2),
  },
  cardActions: {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    flexGrow: 1,
    flexShrink: 1,
  },
  box: {
    order: 1,
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: "center",
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
  // expandOpen: {
  //   transform: 'rotate(360deg)',
  // },
  avatar: {
    backgroundColor: red[500],
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  // flexContainer: {
  //   display: 'flex',
  //   flexFlow: 'row wrap',
  //   justifyContent: 'space-between',
  //   alignContent: 'stretch',
  //   alignItems: 'center',
  // },
  // flexItem: {
  //   display: 'grid',
  //   placeItems: 'center',
  //   flex: '1 1 80',
  //   width: 'auto',
  //   height: 'auto',
  //   margin: 20,
  // },
}));

export default useStyles;
