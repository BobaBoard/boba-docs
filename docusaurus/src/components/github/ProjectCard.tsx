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
      <h3>{title}</h3>
      <div>
        {projectData.priority && (
          <div>
            Priority level {projectData.priority}{" "}
            {"🔥".repeat(5 - projectData.priority)}
          </div>
        )}
        <div>{shortDescription}</div>
        <a href={url}>learn more</a>
      </div>
    </div>
  );
};

export default ProjectCard;
