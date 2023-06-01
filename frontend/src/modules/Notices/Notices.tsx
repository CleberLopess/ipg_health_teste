import React, { useMemo } from "react";
import { NoticesType } from "./Notices.types";
import { CardsNotices } from "components/CardsNotices/CardsNotices";
import styles from "./Notices.module.scss";

export const Notices = ({ noticesData }: NoticesType) => {
  const getNoticesCards = useMemo(() => {
    return (
      <div className={styles.contentNotices}>
        {noticesData.map((item, index) => (
          <CardsNotices
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
    <section>
      <article className={styles.article}>{getNoticesCards}</article>
    </section>
  );
};
