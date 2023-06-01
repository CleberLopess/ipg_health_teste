import { Button } from "components/Button/Button";
import React, { useMemo } from "react";
import { HeaderType } from "./Header.type";
import styles from "./Header.module.scss";

export const Header = ({ headerData }: HeaderType) => {
  const getDataHeader = useMemo(() => {
    return (
      <div className={styles.contentItens}>
        {headerData.map((item, index) => (
          <a key={index} className={styles.itens} href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
    );
  }, []);

  return (
    <header className={styles.header}>
      <article className={styles.article}>
        {getDataHeader}
        <Button model="outline" onCLickButton={() => {}}>
          Label
        </Button>
      </article>
    </header>
  );
};
