import { logger } from "redux-logger";
import {  createStore,compose,applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
const middlewares = [logger]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const store = createStore(
    rootReducer,
    composeEnhancer(
        applyMiddleware(...middlewares)
    )
)
export default store;