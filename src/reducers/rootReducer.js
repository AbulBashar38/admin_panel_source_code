import { combineReducers } from 'redux';
import settings from './settings';
import userReducer from './userReducer';
import productReducer from './productReducer';
import agencyReducer from './agencyReducer';
import locationReducer from './locationReducer';
import forumReducer from './forumReducer'

// const initialState = {
//     userReducer: {
//         userInfo: localStorage.getItem('userInfo') ? JSON.stringify(localStorage.getItem('userInfo')) : null
//     }
// }

export default combineReducers({
    settings,
    userReducer,
    productReducer,
    agencyReducer,
    locationReducer,
    forumReducer
});