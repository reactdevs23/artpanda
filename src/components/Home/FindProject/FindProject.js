import React from "react";
import {
  category,
  coin,
  collection,
  filtering,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../../images/images";
import Card from "./Card/Card";
import styles from "./FindProject.module.css";

const FindProject = () => {
  const projects = [
    {
      status: "live",
      statusbg: "#1CED86",
      feature: ["Kyc+", "audit"],
      image: project1,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#DDFFEF",
      background: "#1CED86",
    },
    {
      status: "Upcoming",
      statusbg: "#FFC107",
      feature: ["Kyc+", "audit"],
      image: project2,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#CEE8FF",
      background: "#46A6FF",
    },
    {
      status: "live",
      statusbg: "#1CED86",
      feature: ["Kyc+", "audit"],
      image: project3,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#F6EBFF",
      background: "#F6AFAF",
    },
    {
      status: "live",
      statusbg: "#1CED86",
      feature: ["Kyc+", "audit"],
      image: project4,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#EFFFFC",
      background: "#65CDBA",
    },
    {
      status: "live",
      statusbg: "#1CED86",
      feature: ["Kyc+", "audit"],
      image: project5,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#FAFFE7",
      background: "#D9EA94",
    },
    {
      status: "Upcoming",
      statusbg: "#FFC107",
      feature: ["Kyc+", "audit"],
      image: project6,
      name: "testing Project",
      tagline: "Hyper Launch",
      info: "SolidHash Provides an innov blockchain website and application software.",
      softcap: 25,
      progress: 34,
      startPrice: 14,
      endPrice: 25,
      color: "#FFF1F1",
      background: "#F6AFAF",
    },
  ];
  return (
    <div className={styles.projectsContainer}>
      <div className="container">
        {" "}
        <div className={styles.header}>
          <p className={styles.heading}>Find the project you want</p>
          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              <img src={category} alt="#" className={styles.icon} />
              <span className={styles.text}>Category</span>
            </div>{" "}
            <div className={styles.button}>
              <img src={collection} alt="#" className={styles.icon} />
              <span className={styles.text}>Collection </span>
            </div>{" "}
            <div className={styles.button}>
              <img src={coin} alt="#" className={styles.icon} />
              <span className={styles.text}>Price Range</span>
            </div>{" "}
            <div className={styles.button}>
              <img src={filtering} alt="#" className={styles.icon} />
              <span className={styles.text}>Filter & Sort</span>
            </div>
          </div>
        </div>
        <div className={styles.projects}>
          {projects.map((el, i) => (
            <Card {...el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindProject;
