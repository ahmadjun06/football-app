import React from "react";
import "./LiveResult.scss";
import { Link } from "react-router-dom";

export const LiveResult = () => {
  return (
    <div className="">
      <div className="live">
        <div className="container">
          <div className="chempions-league">
            <Link to={"/championsleague"} className="linklive">
              Лига чемпинов
            </Link>
          </div>
          <div className="premier-league">
            <Link className="linklive" to={"/premierleague"}>
              Премьер-лига
            </Link>
          </div>
          <div className="la-liga">
            <Link to={"/laliga"} className="linklive">
              Ла Лига
            </Link>
          </div>

          <div className="seriaA">
            <Link to={"/seriaa"} className="linklive">
              Серия А
            </Link>
          </div>
          <div className="bundesliga">
            <Link to={"/bundesliga"} className="linklive">
              Бундеслига
            </Link>
          </div>
          <Link className="linklive" to={"https://www.euro-football.ru/"}>
            Евро-Футбол.Ру
          </Link>
        </div>
      </div>
    </div>
  );
};
