import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  baseQuery } from "./utils/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi2",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
  }),
  endpoints: (builder) => ({
    matchDayVideo: builder.query<any, any>({
      query: () => ({
        url: "?action=get_standings&league_id=302&APIkey=20382f7933abedd162edb40d9ce95d7daf72a866554a3de32c7a6fa1d932fe79",
      }),
    }),
    standingPremierLeague: builder.query<any, any>({
      query:()=>({
        url: "?action=get_standings&league_id=152&APIkey=20382f7933abedd162edb40d9ce95d7daf72a866554a3de32c7a6fa1d932fe79"
      })
    })
  }),
});

export const { useMatchDayVideoQuery, useStandingPremierLeagueQuery } =
  authApi;