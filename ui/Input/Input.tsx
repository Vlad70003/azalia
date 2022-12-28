import React, { useState } from "react";
import styles from "./styles.module.scss";

// import { inputState } from "../../types/input";

import { inputChanger } from "../../script/input/inputChanger";

export const Input = ({
  border,
  width,
  type,
  disabled,
  checked,
  placeholder,
  margin,
  maxLength,
  searchFu,
  search,
  setInputValue,
  inputValue,
  padding,
  borderRadius,
  onKeyDown,
  refInp,
  name,
  setInputFormik,
  max,
  min,
  onClick,
  pointerEvents,
  fontSize,
}: any) => {
  const inputStyle = {
    border: border || "none",
    width: width || "auto",
    margin: margin || "0px",
    padding: padding,
    borderRadius: borderRadius,
    background: "transparent",
    cursor: disabled ? "no-drop	" : "auto",
    pointerEvents: pointerEvents,
    fontSize: fontSize,
    color: "black",
  };

  return (
    <input
      ref={refInp}
      type={type || "string"}
      className={styles.input}
      style={inputStyle}
      defaultValue=""
      onChange={
        setInputFormik
          ? setInputFormik
          : (event) =>
              searchFu
                ? searchFu(event.currentTarget.value)
                : inputChanger(event, setInputValue)
      }
      onKeyDown={onKeyDown}
      value={search || search === "" ? search : inputValue}
      disabled={disabled}
      checked={checked}
      placeholder={placeholder}
      maxLength={maxLength || "524288"}
      name={name}
      onClick={onClick}
    />
  );
};
