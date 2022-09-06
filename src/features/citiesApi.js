import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const citiesApi = createApi ({
    reducerPath: "citiesApi",


    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: () => "/cities?city="
        })
    }),

    // endpoints: (builder) => ({
    //     getFilCities: builder.query ({
    //         query: () => "/cities?city="
    //     })
    // })
})


export default citiesApi
export const {useGetAllCitiesQuery} = citiesApi
// export const {useGetFilCities} = citiesApi