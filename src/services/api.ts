import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const restauranteApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes' }),
  endpoints: (builder) => ({
    getRestaurates: builder.query<Restaurant[], void>({
      query: () => '',
    }),
    getHeroRestaurant: builder.query<Restaurant, string>({
      query: (id) => `/${id}`,
    }),
    getMenu: builder.query<Menu, string>({
      query: (id) => `/${id}`,
    }),
    getHero: builder.query<Restaurant, string>({
      query: (id) => `/${id}`,
    }),
  })
})

export const { useGetRestauratesQuery, useGetMenuQuery, useGetHeroQuery, useGetHeroRestaurantQuery } = restauranteApi
export default restauranteApi
