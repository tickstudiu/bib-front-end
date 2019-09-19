import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style.css';
import 'moment-timezone';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Navbar from './components/navbar.component';
import Footer from './components/footer.component';

import App from './pages/App';
import Create from './pages/Create';
import Update from './pages/Update';
import Add from './pages/Add';

function Root() {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={App} />
            <Route path="/create" component={Create} />
            <Route path="/update/:id" component={Update} />
            <Route path="/add/:id" component={Add} />
            <Footer/>
            <ToastContainer />
        </Router>
    );
}

export default Root;