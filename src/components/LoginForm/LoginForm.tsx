import React from "react";
import { InputContainer } from "./LoginForm.style";

type LoginFormProps = {
    children: React.ReactNode
}

export const LoginForm = ({ children }: LoginFormProps) => {
    return (
        <InputContainer className="container">{children}</InputContainer>
    )
}