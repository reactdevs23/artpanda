import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./Card.module.css";

const Card = ({
  status,
  statusbg,
  feature,
  image,
  name,
  tagline,
  info,
  softcap,
  progress,
  startPrice,
  endPrice,
  color,
  background,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.topBox}>
        <div className={styles.header}>
          {" "}
          <div className={styles.features}>
            {feature.map((el, i) => (
              <p className={styles.feature} key={i}>
                {el}
              </p>
            ))}
          </div>
          <div className={styles.status} style={{ background: statusbg }}>
            <span className={styles.circle}></span>
            <span className={styles.statusText}>{status}</span>
          </div>
        </div>
        <div className={styles.projectNameImage}>
          <img src={image} alt="#" className={styles.image} />
          <div className={styles.nameAndTagline}>
            <p className={styles.name} style={{ color: color }}>
              {name}
            </p>
            <p className={styles.tagline} style={{ color: color }}>
              {tagline}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <p className={styles.info} style={{ color: color }}>
          SolidHash Provides an innov blockchain website and application
          software.{" "}
        </p>
        <div className={styles.softCaps}>
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap :</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {softcap} BNB
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap :</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {softcap} BNB
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap :</span>
            {"  "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {softcap} BNB
            </span>{" "}
          </p>{" "}
          <p className={styles.softCap}>
            <span className={styles.text}>Softcap :</span>{" "}
            <span
              className={`${styles.softCapValue} ${styles.text}`}
              style={{ color: background }}
            >
              {softcap} BNB
            </span>{" "}
          </p>{" "}
        </div>
        <div className={styles.progressContainer}>
          <p className={styles.text}>Progress ({progress}%)</p>
          <ProgressBar progress={progress} background={background} />
          <p className={styles.price} style={{ color: color }}>
            <span>{startPrice} bnb</span>
            <span>{endPrice} bnb</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
