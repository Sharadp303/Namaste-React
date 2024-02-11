import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    home: builder.query({
      query: () =>
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    }),
  }),
});

export const {useHomeQuery} = homeApi;
