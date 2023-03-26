import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import styles from "./HeroSection.module.css";
import { binance, heroImg, solidhash } from "../../../images/images";

const HeroSection = () => {
  const platforms = [
    { icon: binance, to: "#" },
    { icon: solidhash, to: "#" },
    { icon: binance, to: "#" },
  ];
  return (
    <section className={`${styles.heroSectionWrapper}`}>
      <div className={styles.heroSection}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              hello there !! <br /> this is{" "}
              <span className={styles.highlight}>artpanda</span> <br /> good
              launchpad
            </h1>{" "}
            <p className={styles.text}>
              Lorem ipsum is placeholder text commonly com monly used in the
              graphic, print, and publishing industries for previewing
            </p>
            <div className={styles.buttonContainer}>
              <button className={`${styles.button} ${styles.activeButton}`}>
                let’s Start
              </button>{" "}
              <button className={`${styles.button} `}>about us </button>
            </div>
            <div className={styles.platforms}>
              {platforms.map((el, i) => (
                <a
                  href="#/"
                  target="_blank"
                  className={styles.iconContainer}
                  key={i}
                  rel="noreferrer"
                >
                  <img src={el.icon} alt="#" className={styles.icon} />
                </a>
              ))}
            </div>
          </div>{" "}
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="#" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
