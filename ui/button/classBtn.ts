import styles from "./styles.module.scss";

interface classNaneBtnInterface {
  fontWeightClass?: string;
  hoverClassColor?: string;
  activeBtn: boolean;
  disabled?: boolean;
  selectClass?: string;
  privateOffice?: string | null;
}

export const classBtn = ({
  fontWeightClass,
  hoverClassColor,
  activeBtn,
  selectClass,
  privateOffice,
  disabled,
}: classNaneBtnInterface) => {
  let className = `${styles.button}`;

  if (fontWeightClass) {
    className += ` ${styles[fontWeightClass]}`;
  }

  if (hoverClassColor && !disabled) {
    className += ` ${styles[hoverClassColor]}`;
  }

  if (activeBtn && selectClass) {
    className += ` ${styles[selectClass]}`;
  }

  if (privateOffice) {
    className += ` ${styles[privateOffice]}`;
  }

  return className;
};
