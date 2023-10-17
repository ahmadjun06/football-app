import React, { useEffect, useState } from "react";
import { Football } from "../../components/Football/Football";
import { LiveResult } from "../LiveResult/LiveResult";
import axios from "axios";
import { baseQuery } from "../../store/utils/baseQuery";

const baseUrl = baseQuery;

const API_TOKEN = "ab1cbec045b14fb4b1323c797bcb8e3a";

export const Match = () => {
  useEffect(() => {
    async function getLeagueStandings() {
      // const url = `${baseUrl}/competitions/${leagueId}/standings`;
      const url = `${baseQuery}/matches`;
      try {
        const response = await axios.get(url, {
          headers: {
            "X-Auth-Token": API_TOKEN,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getLeagueStandings();
  }, []);

  return (
    <div>
      <Football />
      <LiveResult />
    </div>
  );
};
