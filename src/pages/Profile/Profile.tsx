import React from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="p">
      <div className="profile">
        <div className="profileChildren">
          <Link className="page" to={"/premierleague"}>
            <img src="./img/logo_h.svg" alt="#" />
          </Link>
          <p>Профиль</p>
        </div>
        <div className="mainpage"></div>
        <div className="profileChildren2">
          <p className="name">Имя </p>
          <p className="username">Ahmadon</p>
        </div>
        <div className="profileChildren3">
          <p className="name"> Фамиля</p>
          <p className="username"> Abdumajidov</p>
        </div>
        <div className="logout">
          <Link className="log" to={"/"}>
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </div>
  );
};
