import React from "react";
import { HeroBannerType } from "./HeroBanner.type";
import { Button } from "components/Button/Button";
import styles from "./HeroBanner.module.scss";

export const HeroBanner = ({ description, image, title }: HeroBannerType) => {
  return (
    <section>
      <article className={styles.article}>
        <img className={styles.image} src={image} alt="hero" />
        <div className={styles.contentTitles}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div>
            <Button model="full" onCLickButton={() => {}}>
              Reserve Ticket
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};
