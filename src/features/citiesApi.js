import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'


const citiesApi = createApi({
    reducerPath: "citiesApi",


    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (searchValue) => "/cities?city=" + searchValue
        }),
        postNewCity: builder.mutation({
            query: (newCity) => ({
                url: '/cities',
                method: 'POST',
                body: newCity,
            }),
        })
    })
})


export default citiesApi
export const { useGetAllCitiesQuery, usePostNewCityMutation } = citiesApi