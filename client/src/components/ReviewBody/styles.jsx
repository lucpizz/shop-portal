import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    padding: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(2),
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
  },
  box: {
    order: 1,
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'center',
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
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  
}));

export default useStyles;
