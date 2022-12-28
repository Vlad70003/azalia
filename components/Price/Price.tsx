import React from "react";
import style from "./style.module.scss";

import { CatalogTypes } from "../../types/catalog";

export default function Price({ price }: { price: number }) {
  return <>{`${Math.floor(+price * 70)} ₽ `}</>;
}
