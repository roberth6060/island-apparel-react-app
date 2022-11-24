import React, {ButtonHTMLAttributes} from "react";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
  ButtonSpinner,
} from "./style/Button";

//Control button type:
export enum BUTTON_TYPE_CLASSES {
  base= "base",
  google= "google-sign-in",
  inverted= "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

 export type ButtonProps = {
  children: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
 }& ButtonHTMLAttributes<HTMLButtonElement> //Enables button attributes (submit, etc..)

const Button: React.FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
