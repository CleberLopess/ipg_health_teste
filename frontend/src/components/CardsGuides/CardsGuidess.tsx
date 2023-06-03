import React, { memo } from "react";
import { CardsGuidesTypes } from "./CardsGuides.types";
import styles from "./CardsGuides.module.scss";

export const CardsGuides = memo(function CardsGuides({
  description,
  image,
  onClickNotice,
  title,
}: CardsGuidesTypes) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt="notice"
        onClick={onClickNotice}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
});
