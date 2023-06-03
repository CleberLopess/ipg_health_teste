import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DepoimentsType } from "./Depoiments.type";
import styles from "./Depoiments.module.scss";
import { CardsDepoiments } from "components/CardsDepoiments/CardsDepoiments";
import { Carousel } from "react-responsive-carousel";
import { ArrowSlider } from "components/ArrowSlider/ArrowSlider";
import { getDepoiments } from "pages/api/getDepoiments";
import { CardsDepoimentsTypes } from "components/CardsDepoiments/CardsDepoiments.types";

export const Depoiments = ({ depoimentsData }: DepoimentsType) => {
  const [dataDepoiments, setDataDepoiments] = useState<CardsDepoimentsTypes[]>(
    []
  );

  const getDepoimentsApi = useCallback(async () => {
    const data = await getDepoiments();
    setDataDepoiments(data);
  }, []);

  useEffect(() => {
    getDepoimentsApi();
  }, []);

  const customArrowPrev = (clickHandlerPrev: () => void, hasPrev: boolean) => {
    if (hasPrev) {
      return (
        <div className={styles.arrowLeft}>
          <ArrowSlider direction="left" onClickArrowSlider={clickHandlerPrev} />
        </div>
      );
    }
    return null;
  };

  const customArrowNext = (clickHandlerNext: () => void, hasNext: boolean) => {
    if (hasNext) {
      return (
        <div className={styles.arrowRight}>
          <ArrowSlider
            direction="right"
            onClickArrowSlider={clickHandlerNext}
          />
        </div>
      );
    }
    return null;
  };
  console.log(dataDepoiments);

  const getDepoimentsCards = useMemo(() => {
    return (
      <Carousel
        centerMode
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={customArrowPrev}
        renderArrowNext={customArrowNext}
        centerSlidePercentage={33.33}
      >
        {dataDepoiments.map((item) => (
          <CardsDepoiments
            key={item.id}
            depoiment={item.depoiment}
            name={item.name}
            avatar={item.avatar}
          />
        ))}
      </Carousel>
    );
  }, [dataDepoiments]);

  return (
    <section id="recommendarions" className={styles.section}>
      <article className={styles.article}>
        {" "}
        <h2 className={styles.title}>Here’s what they have to say...</h2>
        {getDepoimentsCards}
      </article>
    </section>
  );
};
