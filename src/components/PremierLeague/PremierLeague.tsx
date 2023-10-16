import React from "react";
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";

export const PremierLeague = () => {
  return (
    <div>
      <Football />
      <LiveResult />
      <p>PremierLeague</p>
    </div>
  );
};
