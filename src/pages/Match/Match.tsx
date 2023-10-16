import React, { useEffect, useState } from "react";
import { Football } from "../../components/Football/Football";
import { LiveResult } from "../LiveResult/LiveResult";
import axios from "axios";
import { get } from "svg.js";

export const Match = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://api.football-data.org/v4/areas/")=>((res) => {
      console.log(res);
    });
  });
  return (
    <div>
      <Football />
      <LiveResult />
    </div>
  );
};
