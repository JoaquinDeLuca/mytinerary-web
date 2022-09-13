import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'


const userApi = createApi ({
    reducerPath: "userApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (dataNewUser) => ({
                url: '/auth/signup',
                method: 'POST',
                body: dataNewUser,
            }),
        })
    })
})

export default userApi
export const { usePostUserMutation } = userApi