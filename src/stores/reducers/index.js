import { combineReducers } from 'redux';

import testReducer from './test.reducer';
import bibReducer from './bib.reducer';

const rootReducers = combineReducers({
    testStore:testReducer,
    bibStore:bibReducer
});

export default  rootReducers;