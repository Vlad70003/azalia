import React, { useMemo } from "react";

import { truncate } from "../../script/wordProcessing/trancute";
import { classBtn } from "./classBtn.ts";

export const Button = ({
  title,
  type,
  color,
  padding,
  fontWeight,
  cursor,
  maxLength,
  background,
  border,
  borderRadius,
  onClick,
  margin,
  borderBottom,
  fontSize,
  width,
  minWidth,
  fontWeightClass,
  hoverClassColor,
  ref,
  disabled,
  selectClass,
  selected,
  privateOffice,
  whiteSpace,
  filterArray,
  elementFilter,
  id,
  onMouseEnter,
  onMouseLeave,
  textDecoration,
  overflow,
  textOverflow,
  textAlign,
  maxWidth,
  fontSizeForMobile,
}: any) => {
  const styleButton = {
    color: disabled ? "white" : color || "black",
    padding: padding || "none",
    fontWeight: fontWeight || "400",
    cursor: cursor || "pointer",
    background: disabled ? "#BFBFBF" : background || "none",
    border: disabled ? "1px solid rgb(191, 191, 191)" : border || "none",
    borderRadius: borderRadius || "none",
    margin: margin || "0px",
    borderBottom: borderBottom || border,
    fontSize: fontSizeForMobile
      ? fontSizeForMobile
      : (fontSize && fontSize > "16px" ? fontSize : "16px") || "16px",
    width: width || "auto",
    minWidth: minWidth,
    whiteSpace: whiteSpace || "inherit",
    transition: "all .4s",
    textDecoration: textDecoration,
    overflow: overflow,
    textOverflow: textOverflow,
    textAlign: textAlign,
    maxWidth: maxWidth,
  };

  const activeBtnFu = () => {
    let flag = false;

    filterArray?.forEach((item: any) => {
      if (item.id === elementFilter?.id) {
        flag = true;
      }
    });
    return flag;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const activeBtn = useMemo(() => activeBtnFu(), [filterArray]);

  const preventDefault = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  return (
    <button
      className={classBtn({
        fontWeightClass,
        hoverClassColor,
        activeBtn,
        selectClass,
        privateOffice,
        disabled,
      })}
      type={type}
      style={styleButton}
      onClick={disabled ? (e) => preventDefault(e) : onClick}
      id={id || "button"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {maxLength ? truncate(title, maxLength) : title}
    </button>
  );
};
