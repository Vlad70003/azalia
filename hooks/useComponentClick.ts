import { useState, useEffect, useRef } from "react";

export default function useComponentClick(initialIsVisible: any) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref: any = useRef();

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    } else {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
