import React, { useState, useEffect } from 'react';

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
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles.jsx';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AverageRating from '../../components/AverageRating/AverageRating.jsx';
import UserRating from '../../components/UserRating/UserRating.jsx';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const ItemDetailsPage = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get('/api/product/')
        // .get('/sku/:sku')
        .then((res) => {
          setProduct(res.data);
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };
    getProduct();
  }, []);

  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      {product.map((item, i) => (
        <Card className={classes.card} key={i}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                SP
              </Avatar>
            }
            action={
              <IconButton aria-label='settings'>
                <IconButton aria-label='share'>
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
                </IconButton>
              </IconButton>
            }
            title={item.name}
            subheader='Exactly What You Are Looking For!'
          />
          <CardMedia
            className={classes.media}
            image={item.imageUrl}
            title={item.imageKey}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {item.description}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardActions}>
            {/* <Box className={classes.box}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          </Box>
          <Box className={classes.box}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          </IconButton>
          </Box> */}
            <Box className={classes.box}>
              <IconButton aria-label='rating'>
                <AverageRating />
              </IconButton>
            </Box>
            <Box className={classes.box}>
              <Typography>$79.99</Typography>
            </Box>
            <Box className={classes.box}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}>
                Add to Cart
              </Button>
            </Box>
            <Box className={classes.box}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='review'>
                <Button
                  type='submit'
                  variant='contained'
                  color=''
                  className={classes.submit}>
                  Review this item
                </Button>
                {/* <ExpandMoreIcon /> */}
              </IconButton>
            </Box>
          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />

            <CardContent>
              <Typography>Bill H.</Typography>
              <Typography>August 23, 2020</Typography>
              <UserRating />
              <Typography paragraph>
                Sit enim perferendis et. Veritatis libero rem odio ipsum ut
                ullam debitis omnis. Ipsam qui cumque occaecati in. Illo ut
                dolorem nam ut ut ut sint. Ratione illum necessitatibus quidem
                aut molestiae pariatur nam rem. Quod recusandae aut qui.
                Explicabo nulla autem ipsum corrupti. Qui voluptatem laboriosam
                saepe dolorem accusamus. Dolorem totam rerum nobis soluta ab
                pariatur sint. Ea explicabo architecto dolor sequi eos molestias
                consequuntur doloremque.
              </Typography>
              <Divider variant='middle' />
            </CardContent>
            <CardContent>
              <Typography>Sally M.</Typography>
              <Typography>April 5, 2021</Typography>
              <UserRating />
              <Typography paragraph>
                Consequatur alias aut quos. Nihil occaecati mollitia sed unde
                magnam. Id voluptatem eius occaecati sapiente. Maiores autem sed
                sapiente et quas. Vel consequatur et amet sit qui quo ut. Illum
                qui qui et quae quidem cupiditate laboriosam. Quae nihil
                reiciendis earum. Inventore minus laudantium possimus
                praesentium quibusdam nihil non. Dicta magnam maiores doloribus
                sint et.
              </Typography>
              <Divider variant='middle' />
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Container>
  );
};

export default ItemDetailsPage;
