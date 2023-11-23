import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MenuItem, Restaurants } from '../models/Restaurant'

export const restauranteApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes' }),
  endpoints: (builder) => ({
    getRestaurates: builder.query<Restaurants[], void>({
      query: () => '',
    }),
    getHeroRestaurant: builder.query<Restaurants, string>({
      query: (id) => `/${id}`,
    }),
    getMenu: builder.query<MenuItem, string>({
      query: (id) => `/${id}`,
    }),
    getHero: builder.query<Restaurants[], string>({
      query: (id) => `/${id}`,
    }),
  })
})

export const { useGetRestauratesQuery, useGetMenuQuery, useGetHeroQuery, useGetHeroRestaurantQuery } = restauranteApi
export default restauranteApi
