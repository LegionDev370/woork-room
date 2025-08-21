import "../../assets/styles/button.css";
import React, { type HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  disabled?: boolean;
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
}

const Button = ({
  variant,
  children,
  className,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      className={`btn cursor-pointer ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
