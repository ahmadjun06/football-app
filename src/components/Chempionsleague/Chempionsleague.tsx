import { LiveResult } from "../../pages/LiveResult/LiveResult";
import { Football } from "../Football/Football";
import "./ChampionsLeague.scss";

export const Chempionsleague = () => {
  return (
    <div className="championsLeague">
      <div className="championsLeagueChildren">
        <Football />
        <LiveResult />
      </div>
    </div>
  );
};
