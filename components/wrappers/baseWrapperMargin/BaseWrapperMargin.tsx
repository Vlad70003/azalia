import React from "react";
// import { baseWrapperState } from "../../../types/baseWrapper";
import style from "./styles.module.scss";

const BaseWrapperMargin = ({
  children,
  maxWidth,
  display,
  justifyContent,
  alignItems,
  flex,
  borderBottom,
}: any) => {
  const styleBaseWrapper = {
    width: "-webkit-fill-available",
    maxWidth: maxWidth || "1780px",
    margin: "0 auto",
    display: display || "block",
    justifyContent: justifyContent || "none",
    alignItems: alignItems || "none",
    flex: flex || "none",
    padding: "0 15px",
    borderBottom: borderBottom,
  };

  return (
    <div className={style.baseWrapperMargin} style={styleBaseWrapper}>
      {children}
    </div>
  );
};

export default React.memo(BaseWrapperMargin);
