import React, { useMemo } from "react";
import { DepoimentsType } from "./Depoiments.type";
import styles from "./Depoiments.module.scss";
import { CardsDepoiments } from "components/CardsDepoiments/CardsDepoiments";

export const Depoiments = ({ depoimentsData }: DepoimentsType) => {
  const getDepoimentsCards = useMemo(() => {
    return (
      <div className={styles.contentDepoiments}>
        {depoimentsData.map((item, index) => (
          <CardsDepoiments
            key={index}
            depoiment={item.depoiment}
            name={item.name}
            photo={item.photo}
          />
        ))}
      </div>
    );
  }, []);

  return (
    <section>
      <article className={styles.article}>{getDepoimentsCards}</article>
    </section>
  );
};
