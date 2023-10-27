import React from "react";
import "./Bundesliga.scss";
import { Football } from "../Football/Football";
import { LiveResult } from "../../pages/LiveResult/LiveResult";

export const Bundesliga = () => {
  return (
    <div className="bundesliga">
      <div className="bundesliga2">
        <div className="b">
        <Football />
        <LiveResult />
        <p>Bundesliga</p>
        </div>
      </div>
    </div>
  );
};
