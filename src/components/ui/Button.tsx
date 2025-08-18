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
  type,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`btn cursor-pointer ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
