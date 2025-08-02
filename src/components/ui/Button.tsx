import "../../assets/styles/button.css";
import React, { type HTMLAttributes } from "react";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "small" | "medium";
  children: React.ReactNode;
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button className={`btn cursor-pointer ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
