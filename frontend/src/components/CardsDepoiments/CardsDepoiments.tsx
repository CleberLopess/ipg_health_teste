import React, { memo } from "react";
import { CardsDepoimentsTypes } from "./CardsDepoiments.types";
import styles from "./CardsDepoiments.module.scss";

export const CardsDepoiments = memo(function CardsDepoiments({
  depoiment,
  name,
  photo = "https://johannesippen.com/img/blog/humans-not-users/header.jpg",
}: CardsDepoimentsTypes) {
  return (
    <div className={styles.card}>
      <div
        className={styles.contentPhoto}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.depoiment}>{depoiment}</p>
    </div>
  );
});
