import {persistStore, persistReducer  } from "redux-persist";
import  rootReducer  from "./reducers";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const persistConfig = {
    key : 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {
        store,
        persistor
    }
}