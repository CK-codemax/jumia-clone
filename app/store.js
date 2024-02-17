import cartReducer from "./redux/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: persistedReducer,
    // Add any other middleware or enhancers here
  });


// const store = configureStore({
//     reducer : {
//         cart : cartReducer,
//     }
// })

const persistor = persistStore(store);

export { store, persistor };