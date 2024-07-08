import React from 'react';
import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Tours from '../pages/Tours';
import TourDetail from '../pages/TourDetail';
import SearchResultList from '../pages/SearchResultList';
import Login from '../pages/Login';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<TourDetail/>}/>
            <Route path='/tours/search' element={<SearchResultList/>}/>
            <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes>
        </>
    );
}

export default Routers;