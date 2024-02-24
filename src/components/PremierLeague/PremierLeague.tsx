import { LiveResult } from "../../pages/LiveResult/LiveResult";
import { useStandingPremierLeagueQuery } from "../../store/authApi";
import { Football } from "../Football/Football";
import "./PremierLeague.scss"

interface ILeague {
  team_name: string;
  league_name: string | number;
  league_round: string | number;
  overall_league_D: string | number;
  overall_league_GA: string | number;
  overall_league_GF: string | number;
  overall_league_L: string | number;
  overall_league_PTS: string | number;
  overall_league_W: string | number;
  overall_league_payed: string | number;
  overall_league_position: string | number;
  team_badge: string;
}

export const PremierLeague = () => {
  const { data, isLoading, error } = useStandingPremierLeagueQuery(null);
  const leagues: ILeague[] = data;
  console.log(data);
  return (
    <div className="premierLeague">
      <div className="premierLeagueChildren">
        <Football />
        <LiveResult />
        <table className="content-tables">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Points</th>
                <th>Matches</th>
                <th>Goal Diff</th>
                <th>Goals Sco</th>
                <th>Lost</th>
                <th>Drawn</th>
                <th>Won</th>
              </tr>
            </thead>
            {leagues &&
              leagues.map((l) => (
                <tbody>
                  <tr>
                    <td>{l.overall_league_position}</td>
                    <td>
              
                    <img src={l.team_badge} alt="Logo" />
                      {l.team_name}
                      </td>
                    <td>{l.overall_league_PTS}</td>
                    <td>{l.overall_league_payed}</td>
                    <td>{l.overall_league_GF}</td>
                    <td>{l.overall_league_GA}</td>
                    <td>{l.overall_league_L}</td>
                    <td>{l.overall_league_D}</td>
                    <td>{l.overall_league_W}</td>
                  </tr>
                </tbody>
              ))}
          </table>
      </div>
    </div>
  );
};
