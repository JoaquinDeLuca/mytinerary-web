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
        }),
        deleteItinerary : builder.query({
            query: (id) => ({
                url: `itineraries/${id}`,
                method: 'DELETE'
            }),
            transformResponse: (response)=> response.response
        }),
        idItinerary : builder.query({
            query: (id) => ({
                url: `itineraries/${id}`,
                method: 'GET'
            }),
            transformResponse: (response)=> response.response
        }),
        postItinerary: builder.mutation({
            query: (newitinerary) => ({
                url: '/itineraries/',
                method: 'POST',
                body: newitinerary,
            }),
        })
    })

})  

export default itinerariesApi
export const { useGetItinerariesQuery , useGetItinerariesByUserQuery, useDeleteItineraryQuery, useIdItineraryQuery, usePostItineraryMutation } = itinerariesApi