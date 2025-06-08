import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import { PURGE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

import cartReducer from './redux/CartSlice';
import bankReducre from './redux/BankSlice';
import themeReducer from './redux/ThemeSlice';

// export const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         bank: bankReducre
//     }
// })

const rootReducre = combineReducers({
    cart: cartReducer,
    bank: bankReducre,
    theme: themeReducer
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart', 'bank', 'theme']
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducre),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [PURGE]
        }
    })
})

export const persistor = persistStore(store);