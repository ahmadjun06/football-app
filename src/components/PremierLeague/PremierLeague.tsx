import React from "react";
import "./PremierLeague.scss"
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";

export const PremierLeague = () => {
  return (
    <div className="premierLeague">
      <div className="premierLeagueChildren">
        <Football />
        <LiveResult />
        <p>PremierLeague</p>
      </div>
    </div>
  );
};
