import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:44328"}),
    endpoints: () => ({})
})

export default apiSlice
