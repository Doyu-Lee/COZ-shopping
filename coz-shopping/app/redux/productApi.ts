import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://cozshopping.codestates-seb.link/api/v1/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductByCount: builder.query({
      query: (counter) => `products?count=${counter}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByCountQuery } = productApi;
