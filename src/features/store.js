import { configureStore } from '@reduxjs/toolkit'
import citiesApi  from './citiesApi'


// Intancia del store
export default configureStore ({
    reducer: {
        // cities: citiesSlice
        [citiesApi.reducerPath] : citiesApi.reducer
    },
})
