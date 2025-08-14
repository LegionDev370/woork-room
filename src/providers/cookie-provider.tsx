import React from "react";
import { CookiesProvider } from "react-cookie";

interface Props {
  children: React.ReactNode;
}

const CookieProvider = ({ children }: Props) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      {children}
    </CookiesProvider>
  );
};

export default CookieProvider;
