import { legacy_createStore as createStore, combineReducers } from 'redux';
import {userReducer} from './reducers/userReducer';

const reducer = combineReducers({
    user: userReducer,
});

const store = createStore(reducer);

export default store;