import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../store/utils/baseQuery";

interface MatchDay {
  dateFrom: string;
  resultSet: string;
  dateTo: string;
}

interface MatchResult extends MatchDay {}

interface LoginUserPayload {
  email: string;
  password: string;
}

interface LoginUserData {
  status: number;
  user_id: number;
}

interface RegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface RegistrationUserData extends LoginUserData {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    addUser: builder.mutation<RegistrationUserData, RegistrationUserPayload>({
      query: (payload) => {
        return {
          url: "/registration",
          method: "POST",
          body: payload,
        };
      },
    }),
    loginUser: builder.mutation<LoginUserData, LoginUserPayload>({
      query: (payload) => {
        return {
          url: "/login",
          method: "POST",
          body: payload,
        };
      },
    }),
    matchDay: builder.mutation<MatchDay, MatchResult>({
      query: (payload) => {
        return {
          url: "/matches",
          method: "GET",
          body: payload,
        };
      },
    }),
    getUser: builder.query({
      query: (userId: string) => `/user/${userId}`,
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useMatchDayMutation,
} = authApi;
