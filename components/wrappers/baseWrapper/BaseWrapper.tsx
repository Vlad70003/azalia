import React from "react";
import styles from "./style.module.scss";

//hooks
import { useScroll } from "../../../hooks/useScroll";
import { useDebounce } from "use-debounce";
import useWindowWidth from "react-hook-use-window-width";

import Header from "../../header/Header";
import BaseWrapperMargin from "../baseWrapperMargin/BaseWrapperMargin";
import { Navigation } from "../../navigation/Navigation";

export default function BaseWrapper({
  children,
  header,
  footer,
  categories,
  isVisible,
  search,
  searchFu,
  setSearch,
  navigation,
  activeScrollPage,
  setActiveScrollPage,
  shopPage,
}: any) {
  const scroll = useScroll();
  const width = useWindowWidth();
  const debounceScroll = useDebounce(scroll, 500);
  const debounceWidth = useDebounce(width, 500);

  return (
    <div className={styles.wrapper} style={styles}>
      {header && (
        <BaseWrapperMargin flex="0 0 auto">
          <Header
            searchFu={searchFu}
            search={search}
            isVisible={isVisible}
            setSearch={setSearch}
          />
        </BaseWrapperMargin>
      )}
      {navigation && (
        <div
          className={
            debounceScroll[0] >= 100
              ? `${styles.sticky} ${styles.sticky__boxShadow}`
              : `${styles.sticky}`
          }
        >
          <BaseWrapperMargin flex="auto">
            {categories && (
              <Navigation
                activeScrollPage={activeScrollPage}
                shopPage={shopPage}
                categories={categories}
                setActiveScrollPage={setActiveScrollPage}
                width={debounceWidth[0]}
              />
            )}
          </BaseWrapperMargin>
        </div>
      )}
      {children}
      {/* {footer && <Footer />} */}
    </div>
  );
}
