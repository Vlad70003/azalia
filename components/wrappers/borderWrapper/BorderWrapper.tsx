import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import Image from "next/image";

import useComponentClick from "../../../hooks/useComponentClick";
// import { borderWrapperState } from "../../../types/borderWrapper";
// import Mark from "./mark/Mark";

export const BorderWrapper = ({
  children,
  border,
  padding,
  background,
  borderRadius,
  inlineFlex,
  maxWidth,
  display,
  minWidth,
  position,
  className,
  overflow,
  width,
  margin,
  flex,
  justifyContent,
  onClick,
  isFocus,
  viewInformation,
  setIsFocus,
  userBirthday,
  changeFocus,
  onlyInfo,
}: any) => {
  const [focusElement, setFocusElement] = useState<any>(false);
  const { ref, isComponentVisible } = useComponentClick(true);

  useEffect(() => {
    setFocusElement(isFocus);
  }, [isFocus]);

  useEffect(() => {
    if (!isComponentVisible) {
      setFocusElement(false);

      if (changeFocus) {
        changeFocus();
      }

      if (setIsFocus) {
        setIsFocus(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComponentVisible]);

  const borderWrapperStyle = {
    border: border,
    padding: padding || "none",
    background: background || "none",
    borderRadius: borderRadius || "none",
    display: display || "flex",
    alignItems: inlineFlex && "center",
    justifyContent: justifyContent && "center",
    maxWidth: maxWidth || "none",
    minWidth: minWidth || "none",
    position: position || "static",
    overflow: overflow || "none",
    width: width || "none",
    margin: margin || "0px",
    flex: flex,
  };

  return (
    <div
      className={className && style[className]}
      style={borderWrapperStyle}
      ref={ref}
    >
      <>{children}</>
      {/* <Mark
        onClick={onClick}
        focusElement={focusElement}
        className={className}
        viewInformation={viewInformation}
        onlyInfo={onlyInfo}
      /> */}
    </div>
  );
};
