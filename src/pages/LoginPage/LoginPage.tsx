import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import * as yup from "yup";
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "../../store/userSlice";
import {  useLoginUserMutation } from "../../store/authApi";

const mockUser: User = {
  user_id: 999,
  name: "pavel",
  mail: "test@test.com",
  phone_number: "935361311",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

interface LoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Обзятельное поле"),
  userpassword: yup.string().required("Обзятельное поле"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  const [loginUser, { data: userData }] = useLoginUserMutation();

  useEffect(() => {
    if (userData) {
      navigate("/main");
    }
  });

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      await loginUser({
        email: data.useremail,
        password: data.userpassword,
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="email"
                inputPlaceholder="Email адрес"
                {...field}
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                inputPlaceholder="Пароль"
                {...field}
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
              />
            )}
          />
          <AppButton
            isDisabled={!!Object.keys(errors).length}
            buttonText="Войти"
            className="button"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};
// function useEffect(arg0: () => void) {
//   throw new Error("Function not implemented.");
// }
