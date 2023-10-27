import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../store/utils/baseQuery";

interface MatchDay {
  data:[],
}

interface LoginUserPayload {
  email: string;
  password: string;
}

interface LoginUserData {
  status: number;
  user_id: number;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseQuery,
  }),
  endpoints: (builder) => ({
    matchDay: builder.query<MatchDay, any>({
      query: () => ({
        url: "leagues/?user=ahmadjonabdumajidov627&token=d317aba093d7350684ea085657d2baf0&t=list&page=1",
      }),
    }),
  }),
});

export const { useMatchDayQuery } =
  authApi;

  // id: number,
  // cc: string,
  // continent_id: number,
  // continent_name: string,
  // country_id: number,
  // country_name: string,
  // current_round_id: number,
  // current_season_id: number,
  // current_stage_id: number,
  // is_amateur: number,
  // is_cup: string,
  // is_friendly: string,
  // name: string,