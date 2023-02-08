import React from "react";
import styles from "./card.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useAppContext } from "@/context/context";

function Card({
  name,
  description,
  price,
  seller,
  img,
  rating,
  purchaseCount,
  id,
}) {
  const { buyItem } = useAppContext();

  const onBuy = async (id) => {
    const toastId = toast.info("Processing");
    const bought = await buyItem(id);
    toast.dismiss(toastId);
    if (bought) {
      toast.success("Bought the item successfully");
    } else {
      toast.error("Failed to buy the item");
    }
  };

  return (
    <div className={styles.cardContainer}>
      <img src={img} alt={name} />
      <div className={styles.detailsContainer}>
        <h2>{name}</h2>
        <h6>{seller}</h6>
        <p className={styles.description}>{description}</p>
        <div className={styles.buyContainer}>
          <h2>Eth: {price}wei</h2>
          <button onClick={() => onBuy(id)}>Buy</button>
          <ToastContainer position="top-center" />
        </div>
      </div>
    </div>
  );
}
export default Card;
