import React from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles.jsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AverageRating from '../../components/AverageRating/AverageRating.jsx';
import UserRating from '../../components/UserRating/UserRating.jsx'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


const ItemDetailsPage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Deluxe Orange Military-Style Backpack"
        subheader="Lots of pouches and straps and stuff!"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/backpack.jpg"
        title="Orange backpack"
      />
      <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Autem voluptas qui et nostrum iusto rerum tenetur. Voluptas earum vitae quas eos ea sint. Velit placeat rem necessitatibus qui quam. Quo et ut et rerum commodi. Culpa assumenda aspernatur quam magnam nemo. Tenetur omnis minus in placeat et.
        </Typography>
        </CardContent>

        <CardActions disableSpacing display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center" alignContent="flex-start">
          <Box order={1} flexGrow={1}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </Box>
          <Box order={2} flexGrow={1}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
          </Box>
          <Box order={3}>
        <IconButton aria-label="rating" order={2} flexGrow={1}>
          <AverageRating />
            </IconButton>
            </Box>
          <Box component="fieldset" mb={0} borderColor="transparent" order={4} flexGrow={1}>
        <Typography>$79.99</Typography>
          </Box>
          <Box component="fieldset" mb={0} borderColor="transparent" order={5} flexGrow={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add to Cart
         </Button>
          </Box>
          <Box order={6} flexGrow={1}>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="review"
          >
          <Button
            type="submit"
            variant="contained"
            color=""
            className={classes.submit}
          >
              Review this item
         </Button>
          {/* <ExpandMoreIcon /> */}
            </IconButton>
            </Box>
          </CardActions>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>

          <Divider variant="middle" />

          <CardContent>
            <Typography>Bill H.</Typography>
            <Typography>August 23, 2020</Typography>
            <UserRating />
          <Typography paragraph>
              Sit enim perferendis et. Veritatis libero rem odio ipsum ut ullam debitis omnis. Ipsam qui cumque occaecati in. Illo ut dolorem nam ut ut ut sint.
              Ratione illum necessitatibus quidem aut molestiae pariatur nam rem. Quod recusandae aut qui. Explicabo nulla autem ipsum corrupti. Qui voluptatem laboriosam saepe dolorem accusamus. Dolorem totam rerum nobis soluta ab pariatur sint. Ea explicabo architecto dolor sequi eos molestias consequuntur doloremque.
          </Typography>
            <Divider variant="middle" />
          </CardContent>
          <CardContent>
            <Typography>Sally M.</Typography>
            <Typography>April 5, 2021</Typography>
            <UserRating />
          <Typography paragraph>
              Consequatur alias aut quos. Nihil occaecati mollitia sed unde magnam. Id voluptatem eius occaecati sapiente. Maiores autem sed sapiente et quas. Vel consequatur et amet sit qui quo ut. Illum qui qui et quae quidem cupiditate laboriosam.
              Quae nihil reiciendis earum. Inventore minus laudantium possimus praesentium quibusdam nihil non. Dicta magnam maiores doloribus sint et.
          </Typography>
            <Divider variant="middle" />
          </CardContent>
          
      </Collapse>
      </Card>
      </Container>
  );
}

export default ItemDetailsPage; 