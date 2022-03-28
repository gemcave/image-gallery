import React from "react";
import "./message.scss";

export const Message = ({ children }: { children: React.ReactNode }) => {
  return <div className="message">{children}</div>;
};
