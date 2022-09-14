import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'


const itinerariesApi = createApi({
    reducerPath: "itinerariesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        getItineraries: builder.query({
            query: (id) =>({
                url: `itineraries/city/${id}`,
                method: 'GET'
            }),
            transformResponse: (response)=> response.response 
        }),
        getItinerariesByUser : builder.query({
            query: (id)=>({
                url: `itineraries/user/${id}`,
                method: 'GET'
            }),
            transformResponse: (response)=> response.response
        }) 
    })

})  

export default itinerariesApi
export const { useGetItinerariesQuery , getItinerariesByUser } = itinerariesApi
