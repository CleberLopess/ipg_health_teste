import React, { useMemo } from "react";
import Link from "next/link";
import { Button } from "components/Button/Button";
import { HeaderType } from "./Header.type";
import styles from "./Header.module.scss";

export const Header = ({ headerData }: HeaderType) => {
  const getDataHeader = useMemo(() => {
    return (
      <div className={styles.contentItens}>
        {headerData.map((item, index) => (
          <Link key={index} className={styles.itens} href={item.link}>
            {item.label}
          </Link>
        ))}
      </div>
    );
  }, []);

  return (
    <header className={styles.header}>
      <article className={styles.article}>
        {getDataHeader}
        <Button model="outline" onCLickButton={() => {}}>
          Contact Us
        </Button>
      </article>
    </header>
  );
};
