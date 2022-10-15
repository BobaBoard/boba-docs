import ProjectCard from "./ProjectCard";
import React from "react";
import cx from "classnames";
import { load } from "js-yaml";
import projects from "../../_generated_data/projects.json";
import styles from "./Projects.module.css";

/**
 * This data should be added to the README section of projects in a YAML-based
 * section fenced off by DATA_DELIMITER_START and DATA_DELIMITER_END.
 */
interface ProjectData {
  status: "active" | "upcoming" | "closed";
  type: "sprint" | "project";
}

const DATA_DELIMITER_START = "---MACHINE DATA---\n```";
const DATA_DELIMITER_END = "\n```";

const DATA_BY_PROJECT_ID = projects.reduce((finalObject, project) => {
  if (!project.readme) {
    finalObject[project.id] = {};
    return finalObject;
  }
  const dataStart = project.readme.indexOf(DATA_DELIMITER_START);
  const dataEnd = project.readme.lastIndexOf(DATA_DELIMITER_END);
  if (dataStart == -1 || dataEnd == -1 || dataStart > dataEnd) {
    finalObject[project.id] = {};
    return finalObject;
  }
  const machineData = load(
    project.readme.substring(dataStart + DATA_DELIMITER_START.length, dataEnd)
  );

  finalObject[project.id] = machineData;

  return finalObject;
}, {} as Record<string, Partial<ProjectData>>);

export const getProjects = ({ status, type }: Partial<ProjectData>) => {
  const projectsOfStatus = status
    ? projects.filter(({ id }) => DATA_BY_PROJECT_ID[id].status == status)
    : projects;
  const projectsOfType = status
    ? projects.filter(({ id }) => DATA_BY_PROJECT_ID[id].type == type)
    : projects;

  // Return the intersection of the two arrays
  return projectsOfStatus.filter((p) => projectsOfType.includes(p));
};

const ProjectsList = (props) => {
  const projects = getProjects({ status: props.status, type: props.type });
  console.log(projects);
  return projects.length > 0 ? (
    projects.map((projectData) => (
      <ProjectCard key={projectData.id} {...projectData} />
    ))
  ) : (
    <div className={cx(styles.container, styles.empty)}>
      Nothing here right now
    </div>
  );
};

export default ProjectsList;
