import userReducer from "./redux/userSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer : {
        user : userReducer
    }
})

export default store