import React, { useState } from "react";
import style from "./styles.module.scss";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { useDebounce } from "use-debounce";

//component
import { Button } from "../../ui/button/Button";

//script
import { toggleColor } from "./script/toggleColor";
import { toggleBorderBottom } from "./script/toggleBorderBottom";

//image
import miniLogo from "../../assets/img/logotype.svg";

//hooks
// import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { useActions } from "../../hooks/useActions";
import { useScroll } from "../../hooks/useScroll";

interface NavigationProps {
  activeScrollPage?: any;
  width: number;
  shopPage?: string;
  setActiveScrollPage?: (value: any) => void;
  categories: [];
}

export const Navigation = ({
  shopPage,
  activeScrollPage,
  categories,
  setActiveScrollPage,
  width,
}: NavigationProps) => {
  //hook
  const scrollY = useScroll();

  const debounceScroll = useDebounce(scrollY, 500);

  const handleActiveScrollPage = (to: string) => {
    setActiveScrollPage && setActiveScrollPage(to);
  };

  return (
    <nav className={style.navigation}>
      <div className={style.navigation__leftSide}>
        <ul
          className={
            debounceScroll[0] >= 100
              ? ` ${style.navigation__list} ${style.navigation__list__open}`
              : `${style.navigation__list} ${style.navigation__list__close}`
          }
        >
          <li className={style.navigation__img}>
            <a onClick={() => scroll.scrollToTop()}>
              <Image
                src={miniLogo}
                className={style.miniLogo}
                alt="mini-logo"
                height={31}
                width={31}
              />
            </a>
          </li>
          {categories
            ?.sort((a, b) => {
              if (a < b) return 1;
              if (a > b) return -1;
              return 0;
            })
            ?.map((item: string) => {
              return (
                <li className={style.navigation__item} key={item}>
                  <Link
                    activeClass="active"
                    className={item}
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-520}
                    onSetActive={handleActiveScrollPage}
                  >
                    <Button
                      title={item.toUpperCase()}
                      whiteSpace="nowrap"
                      type="button"
                      fontSizeForMobile={width < 600 ? "14px" : "18px"}
                      padding="0 0 8px 0"
                      margin={
                        width >= 729
                          ? "0 0 0 31px"
                          : width <= 480
                          ? "0 0 0 16px"
                          : "0 0 0 16px"
                      }
                      borderBottom={toggleBorderBottom({
                        activeScrollPage,
                        value: item,
                        width,
                      })}
                      color={toggleColor({ activeScrollPage, value: item })}
                      fontWeightClass="bold"
                      hoverClassColor="blueHoverClassColor"
                    />
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div className={style.navigation__rightSide}></div>
    </nav>
  );
};
