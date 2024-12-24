import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import Sidebar from './components/Sidebar/sidebar'
import SingleProduct from '../src/pages/SingleProduct'
import { BrowserRouter, Routes, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <div className="flex p-4 gap-4 bg-off_white">
            <Sidebar />
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='contact' element={<Contact />}></Route>
                <Route path='customers' element={<div>customers</div>}></Route>
                <Route path='allproducts' element={<AllProducts />}></Route>
                <Route path='geography' element={<div>geography</div>}></Route>
                <Route path='conversations' element={<div>conversations</div>}></Route>
                <Route path='deals' element={<div>deals</div>}></Route>
                <Route path='export' element={<div>export</div>}></Route>
                <Route path='products/:id' element={<SingleProduct />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    </BrowserRouter>
);

