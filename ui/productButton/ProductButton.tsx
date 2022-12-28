import React from "react";
import style from "./style.module.scss";

export default function ProductButton({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (value: any) => void;
}) {
  return (
    <div className={style.productButton}>
      <div className={style.productButton__leftSide}>
        <button
          className={`${style.productButton__button}  ${
            counter
              ? style.productButton__button__open
              : style.productButton__button__close
          }`}
          onClick={() => !counter && setCounter((prev: number) => prev + 1)}
        >
          {counter ? "В корзине" : "В корзину"}
        </button>
      </div>
      <div
        className={`${style.productButton__rightSide} ${
          !counter && style.productButton__rightSide_close
        }`}
      >
        <div
          className={style.productButton__dec}
          onClick={() =>
            setCounter((prev: number) => (!prev ? prev : prev - 1))
          }
        ></div>
        <div className={style.productButton__counter}>{counter}</div>
        <div
          className={style.productButton__inc}
          onClick={() => setCounter((prev: number) => prev + 1)}
        ></div>
      </div>
    </div>
  );
}
