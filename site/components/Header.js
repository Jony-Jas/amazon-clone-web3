import Image from "next/image";
import React from "react";
import Connect from "./Connect";
import styles from "./Header.module.css";
import { FiSearch, FiShoppingCart, FiMapPin } from "react-icons/fi";

function Header() {
  return (
    <div className={styles.header}>
      <Image src="/amazon.png" alt="" width="100" height="30" />
      <div className={styles.location}>
        <h5>Deliver to</h5>
        <div>
          <FiMapPin /> India
        </div>
      </div>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
        <div className={styles.searchIcon}>
          <FiSearch />
        </div>
      </div>
      <Connect />
      <div className={styles.cart}>
        <FiShoppingCart size={30} />
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;
