import React, { useState, useEffect } from "react";
import "./ChampionsLeague.scss";
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";
import { useMatchDayQuery } from "../../store/authApi";
import axios from "axios";

export const Chempionsleague = () => {
  const { data, isLoading, error } = useMatchDayQuery(null);

  return (
    <div className="championsLeague">
      <div className="championsLeagueChildren">
        <Football />
        <LiveResult />
        {data?.data.map((data) => (
          <div>{data}</div>
        ))}
      </div>
    </div>
  );
};
