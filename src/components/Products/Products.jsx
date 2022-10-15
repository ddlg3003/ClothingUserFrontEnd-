import React from 'react';
import Product from '../Product/Product';
import { Typography, Grid, Button } from '@mui/material'; 
import useStyles from './styles';

const Products = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h3" align="center" paddingBottom="20px" paddingTop="40px">Sản phẩm hot</Typography>
            <Grid container justifyContent="center" spacing={4} className={classes.productContainer}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Grid>
            <div className={classes.moreButton}>
                <Button variant="contained" color="secondary" style={{ margin: '20px 0 40px 0' }}>Xem thêm</Button> 
            </div>
        </div>
    )
}

export default Products;