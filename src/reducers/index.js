import { combineReducers } from 'redux';  // native redux function
import goodsReducer from './goods';   // import reducer from file goods
import basketReducer from './basket';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'      // defaults to localStorage for web


export default function createReducer(injectReducers)  {

// collect all reducers
    const rootReducer = combineReducers({
        goods: goodsReducer,         // add reducer and after it will have name goods
        basket: basketReducer,
        
        ... injectReducers
    });


    const persistConfig = {      // create it for LocalStorage
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);   // collect 2 stores
    return persistedReducer;
}
