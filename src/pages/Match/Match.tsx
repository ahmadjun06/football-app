import React, { useEffect, useState } from "react";
import { Football } from "../../components/Football/Football";
import { LiveResult } from "../LiveResult/LiveResult";
import axios from "axios";
import { useMatchDayMutation } from "../../store/authApi";

const API_TOKEN = "ab1cbec045b14fb4b1323c797bcb8e3a";
const baseUrl = "http://api.football-data.org/v4";

async function getLeagueStandings(leagueId: number) {
  const url = `${baseUrl}/competitions/${leagueId}/standings`;
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
getLeagueStandings(2021);

export const Match = () => {

  return (
    <div>
      <Football />
      <LiveResult />
    </div>
  );
};
