import React from "react";

export type ButtonTypes = {
  model: "full" | "outline";
  onCLickButton: () => void;
  children: React.ReactNode;
};
