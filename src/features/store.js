import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './citiesApi'
import userApi from './userApi'
import itinerariesApi from './itinerariesApi'

// Intancia del store
export default configureStore ({
    reducer: {
        // cities: citiesSlice
        [citiesApi.reducerPath] : citiesApi.reducer,
        
        [userApi.reducerPath] : userApi.reducer,

        [itinerariesApi.reducerPath] : itinerariesApi.reducer,

    }
})
