import React from "react";
import styled from "styled-components";
import "./Fottball.scss";
import { Link } from "react-router-dom";

export const Football = () => {
  return (
    <div className="header">
      <div className="liveresult">
        <div className="photo">
          <img className="logo" src="./img/logo_h.svg" alt="Live_Result" />
        </div>
        <p className="paragraph">
          Футбол онлайн — результаты и счета матчей, видео голов и трансляции
        </p>
        <div className="gift">
          <img className="logo" src="./img/gift.png" alt="Live_Result" />
        </div>
        <div className="search">
          <input type="search" />
        </div>
        <div className="profile">
          <Link className="link" to={"/profile"}>Профиль</Link>
        </div>
      </div>
    </div>
  );
};
