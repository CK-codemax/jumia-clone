'use client'
import { Provider } from "react-redux"

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from "./store";
import { Toaster } from "react-hot-toast";

export default function ReduxProvider({children}) {
  return (
    <Provider store={store}>
        
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        {children}
      </PersistGate>
    </Provider>
  )
}
