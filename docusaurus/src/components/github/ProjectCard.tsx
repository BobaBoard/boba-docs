import { Project, getProjectData } from "./ProjectsList";

import React from "react";
import cx from "classnames";
import styles from "./Projects.module.css";

const ProjectCard = ({ id, title, shortDescription, url }: Project) => {
  const projectData = getProjectData({ id });
  return (
    <div
      className={cx(styles.container, {
        [styles.closed]: projectData.status === "closed",
      })}
    >
      <h3>
        <a href={url}>{title}</a>
        {projectData.priority && (
          <div>{"🔥".repeat(5 - projectData.priority)}</div>
        )}
      </h3>
      <div>
        <div>{shortDescription}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
