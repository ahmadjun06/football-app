// import React, { useEffect, useState } from "react";
// import { Football } from "../../components/Football/Football";
// import { LiveResult } from "../LiveResult/LiveResult";
// import axios from "axios";
// import { baseQuery } from "../../store/utils/baseQuery";

// const baseUrl = baseQuery;

// const API_TOKEN = "ab1cbec045b14fb4b1323c797bcb8e3a";

// export const Match = () => {

//   return (
//     <div>
//       <Football />
//       <LiveResult />
//     </div>
//   );
// };

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from "../../components/AppButton/AppButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMatchDayMutation } from "../../store/authApi";
import { Football } from "../../components/Football/Football";
import { LiveResult } from "../LiveResult/LiveResult";

interface LoginForm {
  dateFrom: string;
  resultSet: string;
  dateTo: string;
}

const loginFormSchema = yup.object({
  dateTo: yup.string().required("Обзятельное поле"),
  dateFrom: yup.string().required("Обзятельное поле"),
  resultSet: yup.string().required("Обзятельное поле"),
});

export const Match = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      dateFrom: "",
      resultSet: "",
      dateTo: "",
    },
  });

  const navigate = useNavigate();

  const [loginUser, { data: userData }] = useMatchDayMutation();

  useEffect(() => {
    if (userData) {
      navigate("/main");
    }
  });

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      await loginUser({
        dateTo: data.dateTo,
        resultSet: data.resultSet,
        dateFrom: data.dateFrom,
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="">
      <Football />
      <LiveResult />
    </div>
  );
};
