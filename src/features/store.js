import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './citiesApi'
import userApi from './userApi'


// Intancia del store
export default configureStore ({
    reducer: {
        // cities: citiesSlice
        [citiesApi.reducerPath] : citiesApi.reducer,
        
        [userApi.reducerPath] : userApi.reducer
        
    },
})
