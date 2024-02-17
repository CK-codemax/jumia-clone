import cartReducer from "./redux/cartSlice";
import currencyReducer from "./redux/currencySlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  };
  
  //Using only one reducer
//const persistedReducer = persistReducer(persistConfig, cartReducer);

const combinedReducers =  {
  cart: cartReducer,
  currency: currencyReducer,
}

const persistedReducer = persistCombineReducers(persistConfig, combinedReducers);

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