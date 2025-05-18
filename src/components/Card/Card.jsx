import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ image, title, content, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.hover : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img className={styles.image} src={image} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Card;
