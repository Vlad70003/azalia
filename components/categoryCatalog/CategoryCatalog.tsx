import React from "react";
import style from "./styles.module.scss";

import Product from "../product/Product";

import { CatalogTypes } from "../../types/catalog";

export default function CategoryCatalog({
  content,
  contentName,
}: {
  content: CatalogTypes[] | null | unknown;
  contentName: string | null;
}) {

  return (
    <div className={style.categoryCatalog}>
      <h2 className={style.categoryCatalog__title}>
        {contentName?.toUpperCase()}
      </h2>
      <ul className={style.categoryCatalog__list}>
        {Array.isArray(content) &&
          content?.map((item: any) => {
            return <Product key={item?.id} content={item} />;
          })}
      </ul>
    </div>
  );
}
