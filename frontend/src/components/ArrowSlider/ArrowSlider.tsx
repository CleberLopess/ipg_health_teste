import React, { memo } from "react";
import { ArrowSliderType } from "./ArrowSlider.types";
import styles from "./ArrowSlider.module.scss";

export const ArrowSlider = memo(function ArrowSlider({
  direction,
  onClickArrowSlider,
}: ArrowSliderType) {
  const getImageArrow = `assets/arrow-${[direction]}.svg`;

  return (
    <button className={styles.button} onClick={onClickArrowSlider}>
      <img className={styles.image} src={getImageArrow} alt="arrow" />
    </button>
  );
});
