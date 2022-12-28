import React from "react";
// import { imgState } from "../../types/image";
import Image from "next/image";
import style from "./styles.module.scss";

import logotype from "../../assets/img/logotype.svg";

export const Logotype = ({ width = "153px", height = "30px" }: any) => {
  return (
    <div className={style.imageWrapper}>
      <Image
        src={logotype}
        alt="logotype"
        className="logotype"
        width={width}
        height={height}
      />
    </div>
  );
};
