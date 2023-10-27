import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import * as yup from "yup";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppModal } from "../../components/AppModal/AppModal";

interface LoginForm {
  username: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  username: yup
    .string()
    .required("Oops, something went wrong. Please try again"),
  userpassword: yup
    .string()
    .required("Oops, something went wrong. Please try again"),
});

export const LoginPage = () => {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const onLoginSubmit = (data: LoginForm) => {
    if (data.username === "Ahmadjon" && data.userpassword === "12345") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("userpassword", data.userpassword);
      navigate("/championsleague");
    } else {
    }
  };

  return (
    <div className="loginPage">
      <div className="loginPageChildren">
        <AppHeader type="h1" headerText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <AppInput
            type="username"
            inputPlaceholder="Email адрес"
            {...register("username")}
          />
          <AppInput
            type="password"
            inputPlaceholder="Пароль"
            {...register("userpassword")}
          />
          <AppButton buttonText="Войти" className="button" type="submit" />
        </form>
      </div>
      {/* <AppModal actve={modal} modalText={"ne adasd ads"} setActive={function (): {} {
        throw new Error("Function not implemented.");
      } } /> */}
    </div>
  );
};
