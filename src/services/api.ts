import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const restauranteApi = createApi({
  // The cache reducer is used to store the results of queries in the store and to keep track of their status
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes' // the base URL for your endpoint
  }),
  // The endpoints represent the different API endpoints we need to talk to and the shape of their data in the store
  endpoints: (builder) => ({
    getRestaurates: builder.query<Restaurant[], void>({
      query: () => ''
    }), // the query function is used to generate the URL for the endpoint based on the arguments passed to it
    getHeroRestaurant: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    }),
    getMenu: builder.query<Menu, string>({
      query: (id) => `/${id}`
    }),
    getHero: builder.query<Restaurant, string>({
      query: (id) => `/${id}`
    })
  })
})

export const {
  useGetRestauratesQuery,
  useGetMenuQuery,
  useGetHeroQuery,
  useGetHeroRestaurantQuery
} = restauranteApi
export default restauranteApi
