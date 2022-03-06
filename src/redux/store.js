import { createStore, applyMiddleware, combineReducers } from "redux";
import {createLogger} from 'redux-logger'
import thunk from "redux-thunk";
import cartReducer from './cart/cartReducer'
import pizzaReducer from "./pizzas/pizzaReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore } from 'redux-persist'
const logger = createLogger();
const rootReducer = combineReducers({
        pizzaState: pizzaReducer,
        cartState:  cartReducer
})
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cartState']
}
const middlewares= [logger, thunk];
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);