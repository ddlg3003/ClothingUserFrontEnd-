import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavAndFooter from './NavAndFooter';
import NotNavAndFooter from './NotNavAndFooter';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductListMore from './ProductListMore/ProductListMore';
import Profile from './Profile/Profile'
import Cart from './Cart/Cart';
import Auth from './Auth/Auth';
import Checkout from './Checkout/Checkout';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <Routes>
                    <Route element={<NavAndFooter />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/:name" element={<ProductDetail />} />
                        <Route path="/products/" element={<ProductListMore />} />
                        <Route path="/cart" element={ isAuthenticated ? <Cart /> : <Navigate replace to="/auth" /> } />
                        <Route path="/checkout" element={ isAuthenticated ? <Checkout /> : <Navigate replace to="/auth" /> } />
                        <Route path="/profile" element={ isAuthenticated ? <Profile /> : <Navigate replace to="/auth" /> } />
                    </Route>
                    <Route element={<NotNavAndFooter />}>
                        <Route path="/auth" element={ !isAuthenticated ? <Auth /> : <Navigate replace to="/" /> } />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App;