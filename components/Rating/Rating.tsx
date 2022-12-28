import React from "react";
import style from "./style.module.scss";

import RaitingStar from "../raitingStar/RaitingStar";
import { declOfNum } from "../../script/string/declOfNum";

import { RatingTypes } from "../../types/catalog";

export default function Rating({ rating }: { rating: RatingTypes }) {
  return (
    <>
      <div className={style.ratingStar}>
        <RaitingStar />
      </div>
      <div className={style.ratingValue}>{`${rating?.count} ${declOfNum(
        rating?.count,
        ["отзыв", "отзыва", "отзывов"]
      )}`}</div>
    </>
  );
}
