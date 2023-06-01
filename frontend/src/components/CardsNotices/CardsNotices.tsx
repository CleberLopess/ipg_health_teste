import React from "react";
import { CardsNoticesTypes } from "./CardsNotices.types";
import styles from "./CardsNotices.module.scss";

export const CardsNotices = ({
  description,
  image,
  onClickNotice,
  title,
}: CardsNoticesTypes) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentImage} onClick={onClickNotice}>
        <img className={styles.image} src={image} alt="notice" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
