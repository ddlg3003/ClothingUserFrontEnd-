import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductListMore from './ProductListMore/ProductListMore';
import Profile from './Profile/Profile'
import Cart from './Cart/Cart';
import Login from './Login/Login';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/products/" element={<ProductListMore />} />
                    <Route path="user/:id" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App;