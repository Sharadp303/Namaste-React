import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../utils/cartSlice'
import { homeApi } from './apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const appStore=configureStore({
    reducer:{
        [homeApi.reducerPath]:homeApi.reducer,
        cart:cartReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(homeApi.middleware)

});

setupListeners(appStore.dispatch)
export default  appStore;

