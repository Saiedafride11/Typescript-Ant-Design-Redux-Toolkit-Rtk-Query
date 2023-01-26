import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Flights {
      flight_number: number,
      mission_name: string
}

export const apiSlice = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
            baseUrl: process.env.REACT_APP_API_URL
      }),
      tagTypes: ["Flights", "Flight"],
      endpoints: (builder) => ({
            getFlights: builder.query<Flights[], void>({
                  query: () => "/",
                  keepUnusedDataFor: 5,
                  providesTags: ["Flights"]
            }),
            getFlight: builder.query({
                  query: (flightId) => `/${flightId}`,
                  providesTags: (result, error, arg) => [ { type: "Flight", id: arg } ]
            }),
      })
})

export const { useGetFlightsQuery, useGetFlightQuery } = apiSlice;