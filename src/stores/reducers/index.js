import { combineReducers } from 'redux';

import testReducer from './testReducer';

const rootReducers = combineReducers({
    testStore:testReducer
});

export default  rootReducers;