import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { updateUser, userReducer } from "./reducer/userReducer";

const middleware = [thunk];

const reducer = combineReducers({
    user: userReducer,
    // userProfile:userProfileReducer
    updateUser:updateUser
});

const initialState = {};
 
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
