import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../models/Restaurant'

export const restauranteApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes' }),
  endpoints: (builder) => ({
    getRestaurates: builder.query<Restaurants[], void>({
      query: () => '',
    }),
    getMenu: builder.query<Restaurants, string>({
      query: (id) => `/${id}`,
    }),
  })
})

export const { useGetRestauratesQuery, useGetMenuQuery } = restauranteApi
export default restauranteApi
