import React from "react";
import { Button } from "./AppButton.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  buttonText: string;
  isDisabled?: boolean;
};

export const AppButton = ({
  className,
  buttonText,
  isDisabled,
  type,
  ...props
}: ButtonProps) => {
  return (
    <Button className={className} {...props} disabled={isDisabled} type={type}>
      {buttonText}
    </Button>
  );
};
