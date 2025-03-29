import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Built for your passions",
    src: require("../../static/img/bobajustright.png").default,
    description: (
      <>
        BobaBoard is made for and by passionate individuals that live their
        lives on the web. No matter who you are, we want to help you build
        communities aligned with your interests and values.
      </>
    ),
  },
  {
    title: "Chaotic-ethical approach",
    src: require("../../static/img/bobaburn.png").default,
    description: (
      <>
        In a online world corrupted by those who "move fast and break things",
        BobaBoard aims to <em>disrupt</em> but not <em>destroy</em>. So leave
        the status quo at the door, but always remember: with great chaos comes
        great responsibility.
      </>
    ),
  },
  {
    title: "Judgement-free environment",
    src: require("../../static/img/bobajuice.png").default,
    description: (
      <>
        BobaBoard's volunteering process aims to be friendly for beginners and
        enriching for experts. No matter whether you're a seasoned professional
        or are just learning new skills, we welcome you with open arms!
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
