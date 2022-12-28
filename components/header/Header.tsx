import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import { Logotype } from "../logotype/Logotype";
import { BorderWrapper } from "../wrappers/borderWrapper/BorderWrapper";

import { Input } from "../../ui/Input/Input";
import { Close } from "../../ui/close/Close";
import { Seach } from "../../ui/search/Search";

export default function Header({
  searchFu,
  search,
  isVisible,
  setSearch,
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <div className={styles.header__leftSide}>
          <span className={styles.header__logo__wrapper}>
            <Link href="/">
              <Logotype />
            </Link>
          </span>
        </div>
        <a
          href="https://spb.hh.ru/resume/4360a650ff091b38b60039ed1f6c4944573243"
          target="__blank"
        >
          ССЫЛКА НА РЕЗЮМЕ
        </a>
        <div className={styles.header__rightSide}>
          {isVisible && (
            <span className={styles.header__input__wrapper}>
              <BorderWrapper
                display="flex"
                width="189px"
                border="1px solid #BFBFBF"
                padding="8px 16px"
                background="white"
                borderRadius="30px"
              >
                <Input
                  placeholder="Поиск по сайту"
                  searchFu={searchFu}
                  search={search}
                  width="150px"
                />
                {search ? (
                  <Close right="10px" top="3px" onClick={() => setSearch("")} />
                ) : (
                  <Seach />
                )}
              </BorderWrapper>
            </span>
          )}

          <span className={styles.header__profile}>
            {isVisible && (
              <div className={styles.header__profile__seachWrapper}>
                {search ? (
                  <Close right="10px" top="5px" onClick={() => setSearch("")} />
                ) : (
                  <Seach black setIsOpen={setIsOpen} isOpen={isOpen} />
                )}
              </div>
            )}
          </span>
        </div>
      </div>
      {isOpen && isVisible === true && (
        <span className={styles.header__input__wrapperlaptop}>
          <BorderWrapper
            display="flex"
            border="1px solid #BFBFBF"
            padding="8px 16px"
            background="white"
            borderRadius="30px"
            position="relative"
            margin="20px 0 0 0"
          >
            <Input
              placeholder="Поиск по сайту"
              width="100%"
              searchFu={searchFu}
              search={search}
            />
            {search ? (
              <Close right="10px" top="5px" onClick={() => setSearch("")} />
            ) : (
              <Seach />
            )}
          </BorderWrapper>
        </span>
      )}
      {isVisible && (
        <div className={styles.header__input__wrapperModile}>
          <BorderWrapper
            display="flex"
            border="1px solid #BFBFBF"
            padding="8px 16px"
            background="white"
            borderRadius="30px"
            position="relative"
            margin="20px 0 0 0"
          >
            <Input
              placeholder="Поиск по сайту"
              width="100%"
              searchFu={searchFu}
              search={search}
            />
            {search ? (
              <Close right="10px" top="5px" onClick={() => setSearch("")} />
            ) : (
              <Seach />
            )}
          </BorderWrapper>
        </div>
      )}
    </header>
  );
}
