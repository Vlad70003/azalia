import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

// import { imgState } from "../../types/image";

import seach from "../../assets/img/search-black.svg";
import seachBlack from "../../assets/img/search-black.svg";

export const Seach = ({ width, height, black, setIsOpen, isOpen }: any) => {
  return (
    <div
      className={black ? style.imageWrapper24 : style.imageWrapper18}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
    >
      <Image
        src={black ? seachBlack : seach}
        alt="seach"
        className={style.search}
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  );
};
