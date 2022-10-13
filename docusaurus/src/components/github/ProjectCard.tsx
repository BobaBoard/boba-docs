import React from "react";
import projects from "../../_generated_data/projects.json";
import styles from "./ProjectCard.module.css";

export const getProjectsByTag = ({ tag }: { tag: string }) => {
  return projects;
};

const ProjectCard = ({ title, shortDescription, url }: typeof projects[0]) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div>
        <div>{shortDescription}</div>
        <a href={url}>learn more</a>
      </div>
    </div>
  );
};

export default ProjectCard;
