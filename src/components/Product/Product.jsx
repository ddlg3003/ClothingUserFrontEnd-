import React from 'react';
import { Typography, Grid, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { URL_REGEX } from '../../utils/globalVariables';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Link
          to={`/products/${product?.name
            .replace(URL_REGEX, '-')
            .toLowerCase()}-i.${product.id}`}
          className={classes.links}
        >
          <img src={product?.image} className={classes.image} />
          <div>
            <Rating
              readOnly
              value={
                product?.avgRating
                  ? product?.avgRating
                  : product?.avg_rating
                  ? product?.avg_rating
                  : 0
              }
              precision={0.1}
              size="large"
            />
          </div>
          <Typography
            fontWeight="normal"
            variant="title1"
            className={classes.title}
            fontSize={16}
          >
            {product?.name}
          </Typography>
          <Typography
            color="error"
            className={classes.title}
            fontWeight="bold"
            fontSize={18}
          >
            {Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(product?.price)}
          </Typography>
        </Link>
      </Grid>
    </>
  );
};

export default Product;
