import React, { useMemo } from "react";
import { GuidesType } from "./Guides.types";
import styles from "./Guides.module.scss";
import { CardsGuides } from "components/CardsGuides/CardsGuidess";

export const Guides = ({ GuidesData }: GuidesType) => {
  const getGuidesCards = useMemo(() => {
    return (
      <div className={styles.contentGuides}>
        {GuidesData.map((item, index) => (
          <CardsGuides
            key={index}
            description={item.description}
            image={item.image}
            title={item.title}
            onClickNotice={() => {}}
          />
        ))}
      </div>
    );
  }, []);

  return (
    <section id="guides">
      <article className={styles.article}>{getGuidesCards}</article>
    </section>
  );
};
