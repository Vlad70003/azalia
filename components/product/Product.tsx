import React, { useState } from "react";
import style from "./styles.module.scss";
import Image from "next/image";

import ProductButton from "../../ui/productButton/ProductButton";

import Rating from "../Rating/Rating";
import Price from "../Price/Price";
import ChangeFavorite from "../changeFavorite/ChangeFavorite";
import Hit from "../../ui/hit/Hit";

import { CatalogTypes } from "../../types/catalog";

export default function Product({ content }: { content: CatalogTypes }) {
  const [counter, setCounter] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={style.product}>
      <div className={style.product__top}>
        <Image
          width={220}
          height={220}
          loader={() => content?.image}
          src={content?.image}
          alt="product image"
        />
        {content?.rating?.count > 300 ? <Hit /> : null}
      </div>
      <div className={style.product__bottom}>
        <ul className={style.product__bottom__content}>
          <li className={style.product__bottom__item}>
            <div className={style.product__category}>{content?.category}</div>
            <div className={style.product__ratingWrapper}>
              <Rating rating={content?.rating} />
            </div>
          </li>
          <li className={style.product__bottom__item}>{content?.title}</li>
          <li className={style.product__bottom__item}>
            <Price price={content?.price} />
            <span className={style.product__bottom__item_grey}>/шт.</span>
          </li>
          <li className={style.product__bottom__item}>
            <div className={style.product__wrapperBtn}>
              <div className={style.product__wrapperBtn_item}>
                <ProductButton counter={counter} setCounter={setCounter} />
              </div>
              <div className={style.product__wrapperBtn_item}>
                <ChangeFavorite
                  isFavorite={isFavorite}
                  handleFavorite={handleFavorite}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
