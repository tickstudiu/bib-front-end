import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

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
import Bib from './pages/Bib';
import About from './pages/About';

import Reducers from './stores/reducers';

const createStoreApplyMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreApplyMiddleware(Reducers);

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                    <Route exact path="/" component={App} />
                    <Route path="/create" component={Create} />
                    <Route path="/update/:id" component={Update} />
                    <Route path="/add/:id" component={Add} />
                    <Route path="/bib" component={Bib} />
                    <Route path="/about" component={About} />
                <Footer/>
                <ToastContainer />
            </Router>
        </Provider>
    );
}

export default Root;