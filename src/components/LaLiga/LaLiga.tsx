import React from "react";
import "./LaLiga.scss";
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";

export const LaLiga = () => {
  return (
    <div className="laLiga">
      <div className="laLigaChildren">
      <Football />
      <LiveResult />
      <p>LaLiga</p>
      </div>
    </div>
  );
};
