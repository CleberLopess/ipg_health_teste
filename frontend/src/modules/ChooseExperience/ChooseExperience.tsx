import React, { useMemo } from "react";
import { ChooseExperienceType } from "./ChooseExperience.type";
import styles from "./ChooseExperience.module.scss";

export const ChooseExperience = ({
  image,
  paragraph,
  title,
}: ChooseExperienceType) => {
  const getParagraph = useMemo(() => {
    return paragraph.map((item, index) => (
      <div key={index} className={styles.paragraphItem}>
        <h4 className={styles.paragraphTitle}>{item.title}</h4>
        <p className={styles.paragraphDescription}>{item.description}</p>
      </div>
    ));
  }, []);

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <div className={styles.contentTitle}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.contentParagraph}>{getParagraph}</div>
        </div>
        <img className={styles.image} src={image} alt="experience" />
      </article>
    </section>
  );
};
