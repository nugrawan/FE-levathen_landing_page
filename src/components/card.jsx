import React from "react";
import { rc } from "../lib/utils";

function CardTitle({ children, className }) {
  return <h4 className="font-bold">{children}</h4>;
}

function CardDesc({ children }) {
  return <p className="text-sm leading-6">{children}</p>;
}

function Card({ children, className, active = false }) {
  return (
    <div
      data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="100"
      className={rc(
        "p-8 space-y-5 border rounded-2xl def-shadow",
        active ? "border-primary-default" : "border-none",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Card, CardTitle, CardDesc };
