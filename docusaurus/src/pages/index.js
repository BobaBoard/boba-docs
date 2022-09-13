import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/volunteering/intro"
          >
            Volunteer with us 💼
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to BobaBoard's documentation. This website is a WIP."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.warning}>
          <h2>Warning</h2>
          <p>
            BobaBoard (and this documentation) are still in the{" "}
            <em>"extreme WIP"</em> phase!{" "}
          </p>
          <p>
            <strong>
              Everything you see here might be incomplete and/or confusing to
              outsiders.
            </strong>{" "}
          </p>
          <p>
            While we straighten things up, you can keep up to date with
            BobaBoard's happenings by subscribing to{" "}
            <a href="https://www.bobaboard.com/#newsletter">
              our product newsletter
            </a>
            , our{" "}
            <a href="https://essentialrandomness.com/">insiders newsletter</a>,
            or by following us on other socials (in the footer).
          </p>
        </div>
      </main>
    </Layout>
  );
}
