import { combineReducers } from 'redux';

import testReducer from './test.reducer';
import bibReducer from './bib.reducer';
import bibDataReducer from './bibData.reducer';

const rootReducers = combineReducers({
    testStore:testReducer,
    bibStore:bibReducer,
    bibDataStore:bibDataReducer,
});

export default  rootReducers;