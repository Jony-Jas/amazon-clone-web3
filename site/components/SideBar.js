import React from "react";
import styles from "./sidebar.module.css";

function SideBar() {
  return (
    <div className={styles.container}>
      <h4>Category</h4>
      <ul className={styles.list}>
        <li>Books</li>
        <li>Health, Family & Personal</li>
        <li> Development Economics Books </li>
        <li>Religion & Spirituality</li>
        <li>Classic Fiction </li>
        <li>Environment & Nature </li>
        <li>Children's Literature & Fiction</li>
      </ul>
      <h4>Format</h4>
      <ul className={styles.list}>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Audiobook</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Audiable Audio Edition</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Bath Book</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Board Book</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Bundle</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>HardCover</label>
        </li>
      </ul>
      <h4>Author</h4>
      <ul className={styles.list}>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Darius Foroux</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Maple Press</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Lucy Hawking</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Stephen Richard</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Jenner</label>
        </li>
        <li>
          <input type="checkbox" style={{ marginRight: 5 }} />
          <label>Belleamy Blake</label>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
