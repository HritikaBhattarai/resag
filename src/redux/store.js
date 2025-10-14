//to get the old data from reducers to store file and send to the react js applications
import { createStore } from 'redux'
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;