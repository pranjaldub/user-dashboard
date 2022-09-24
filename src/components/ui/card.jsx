import React from "react";
import Styles from "./card.module.css";
import {
  getRandomColor,
  createImageFromInitials,
} from "../../components/Utils";
const Card = ({ userData }) => {
  const imgSrc = "";
  return (
    <li className={Styles.cards_item}>
      <div className={Styles.card}>
        {/* <div className={Styles.card_image}><img src="https://picsum.photos/500/300/?image=2"></img></div> */}

        <img
          className={Styles.card_image}
          id="preview"
          src={
            imgSrc.length <= 0
              ? createImageFromInitials(
                  500,
                  `${userData.first} ${userData.last}`,
                  getRandomColor()
                )
              : imgSrc
          }
          alt="profile-pic"
        />

        <div className={Styles.card_content}>
          <h2 className={Styles.card_title}>{userData.first}</h2>
          <p className={Styles.card_text}>{userData.email}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
