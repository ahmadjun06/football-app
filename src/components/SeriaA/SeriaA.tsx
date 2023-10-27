import React from "react";
import "./SeriaA.scss"
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";

export const SeriaA = () => {
  return (
    <div className="seriaA">
      <div className="seriaAChildren">
        <div className="seriASecondChildren">
        <Football />
        <LiveResult />
        <p>Seria A</p>
        </div>
      </div>
    </div>
  );
};
