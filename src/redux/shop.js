import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //...middleware will spread the array
//value as each individual arguments to applymiddleware fxn.

export default store;
