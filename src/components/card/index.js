import React, { useCallback, useEffect, useState } from "react";
import styles from "./card.module.css";
export const Card = () => {
  let percent = 0;

  const gageCalc = (bmi) => {
    var result = 0;
    if (bmi >= 16 && bmi <= 18.5) {
      result = getPercentage(bmi, 16, 18.5, 0);
    } else if (bmi > 18.5 && bmi < 25) {
      result = getPercentage(bmi, 18.5, 25, 0.33);
    } else if (bmi >= 25 && bmi <= 30) {
      result = getPercentage(bmi, 25, 30, 0.66);
    }
    return result;
  };

  function getPercentage(bmi, lowerBound, upperBound, segmentAdjustment) {
    return (
      (bmi - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Разгрузочный терминал 1</div>
      <div className={styles.info}>
        <div className={styles.headInfo}>
          <span>Площадка Б17</span>
          <span>Камера 1</span>
        </div>
        <img src="/grech.png" alt="" />
        <div className={styles.statistic}>
          <div className={styles.statisticItem}>
            <span>△заяв = 234,44</span>
            <span>N вагона 234,44</span>
          </div>
          <div className={styles.statisticItem}>
            <span>△факт = 147,94</span>
            <span>N вагона 234,44</span>
          </div>
          <div className={styles.statisticItem}>
            <span>Прогресс загрузки</span>
            <span>{gageCalc(17)}%</span>
          </div>
        </div>
        <button className={`${styles.button} ${styles.buttonStop}`}>
          стоп
        </button>
        <button className={styles.button}>Видео</button>
        <span className={styles.footer}>Период обновление кадра: 5 секунд</span>
      </div>
    </div>
  );
};
