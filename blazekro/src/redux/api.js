// rtkFolder/signinApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signinApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/",
  }),
  endpoints: (builder) => ({
    getposts: builder.query({
      query: () => "product/allproduct",
    }),
    GetProductById: builder.query({
      query: (id) => `product/${id}`,
    }),
    getcategory: builder.query({
      query: () => "product/getcategory",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `product/category/${category}`,
    }),
    singindata: builder.mutation({
      query: (post) => ({
        url: "user/signin",
        method: "POST",
        credentials: "include",
        body: post,
      }),
    }),
    addToCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "addCart/cart",
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: { productId, quantity },
      }),
    }),
  }),
});

export const {
  useSingindataMutation,
  useGetpostsQuery,
  useGetcategoryQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useAddToCartMutation,
} = signinApi;
