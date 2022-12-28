import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

import favorite from "../../assets/img/favorite.svg";

interface changeFavoriteTypes {
  isFavorite: boolean;
  handleFavorite: () => void;
}

export default function ChangeFavorite({
  isFavorite,
  handleFavorite,
}: changeFavoriteTypes) {
  return (
    <div
      className={`${style.favorite} ${
        isFavorite ? style.favorite_active : style.favorite_notActive
      }`}
      onClick={() => handleFavorite()}
    >
      <Image src={favorite} alt="favorite" />
    </div>
  );
}
