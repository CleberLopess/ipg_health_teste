import React, { useMemo } from "react";
import Link from "next/link";
import { FooterTypes } from "./Footer.types";
import styles from "./Footer.module.scss";

export const Footer = ({ links }: FooterTypes) => {
  const getLinks = useMemo(() => {
    return links.map((item) => (
      <Link key={item.link} className={styles.link} href={item.link}>
        {item.label}
      </Link>
    ));
  }, []);

  return (
    <footer className={styles.footer}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>My Log Travels</h3>
          <div className={styles.contentAreaLinks}>
            <h4 className={styles.titleLinks}>Quick Links</h4>
            <div className={styles.contentLinks}>{getLinks}</div>
          </div>
        </div>
        <span className={styles.reserved}>
          2021 - 2022 My Log Travels. All Rights Reserved.
        </span>
      </article>
    </footer>
  );
};
