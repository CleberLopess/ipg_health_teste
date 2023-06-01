import React, { memo } from "react";
import { CardsNoticesTypes } from "./CardsNotices.types";
import styles from "./CardsNotices.module.scss";

export const CardsNotices = memo(function CardsNotices({
  description,
  image,
  onClickNotice,
  title,
}: CardsNoticesTypes) {
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
