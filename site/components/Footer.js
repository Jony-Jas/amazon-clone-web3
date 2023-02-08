import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <Image src="/amazon.png" alt="" width="100" height="30" />
    </div>
  );
}

export default Footer;
