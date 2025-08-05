import "../../assets/styles/button.css";
import React, { type HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant,
  children,
  className,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`btn cursor-pointer ${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
