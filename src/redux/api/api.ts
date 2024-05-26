import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "API_URL";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getData: builder.query<unknown, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetDataQuery } = api;
