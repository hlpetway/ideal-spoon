"use client";
import styles from "../styles/layout.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="logo.svg" alt="slackline logo" />
    </nav>
  );
};
