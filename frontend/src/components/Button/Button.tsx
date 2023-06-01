import React, { memo } from "react";
import { ButtonTypes } from "./Button.types";
import styles from "./Button.module.scss";

export const Button = memo(function Button({
  children,
  model = "full",
  onCLickButton,
}: ButtonTypes) {
  const buttonClassName = `${styles.button} ${styles[model]}`;

  return (
    <button onClick={onCLickButton} className={buttonClassName}>
      {children}
    </button>
  );
});
