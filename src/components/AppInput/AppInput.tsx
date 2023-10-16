import React, { forwardRef } from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";
import { LoginForm } from "../LoginForm/LoginForm";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "tel" | "password" | "text" | "email" | "search";
  inputPlaceholder: string;
  isError?: boolean;
  errorText?: string;
}

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput(
    { inputPlaceholder, type, isError, errorText, ...props },
    ref
  ) {
    return (
      <LoginForm>
        <ThemeInput
          type={type}
          placeholder={inputPlaceholder}
          {...props}
          ref={ref}
        />
        {isError && (
          <ThemeInputError $isError={isError}>{errorText}</ThemeInputError>
        )}
      </LoginForm>
    );
  }
);
