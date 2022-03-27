import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //...middleware will spread the array
//value as each individual arguments to applymiddleware fxn.

export const persistor = persistStore(store);
