import ProjectCard from "./ProjectCard";
import React from "react";
import cx from "classnames";
import { load } from "js-yaml";
import projects from "../../_generated_data/projects.json";
import styles from "./Projects.module.css";

export type Project = typeof projects[0];

/**
 * This data should be added to the README section of projects in a YAML-based
 * section fenced off by DATA_DELIMITER_START and DATA_DELIMITER_END.
 */
interface ProjectData {
  status: "active" | "upcoming" | "closed";
  type: "sprint" | "project";
  priority: number;
}

const DATA_DELIMITER_START = "---MACHINE DATA---\n```";
const DATA_DELIMITER_END = "\n```";

export const getProjectData = ({
  id,
}: {
  id: string;
}): Partial<ProjectData> => {
  const project: Project | undefined = projects.find(
    (project) => project.id == id
  );
  if (!project || !project.readme) {
    return {};
  }
  const dataStart = project.readme.indexOf(DATA_DELIMITER_START);
  const dataEnd = project.readme.lastIndexOf(DATA_DELIMITER_END);
  if (dataStart == -1 || dataEnd == -1 || dataStart > dataEnd) {
    return {};
  }
  return load(
    project.readme.substring(dataStart + DATA_DELIMITER_START.length, dataEnd)
  );
};

const DATA_BY_PROJECT_ID = projects.reduce((finalObject, project) => {
  finalObject[project.id] = getProjectData(project);
  console.log(getProjectData(project));
  return finalObject;
}, {} as Record<string, Partial<ProjectData>>);

const getProjects = ({ status, type }: Partial<ProjectData>) => {
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
  const projects = getProjects({ status: props.status, type: props.type }).sort(
    ({ id: id1 }, { id: id2 }) => {
      return (
        DATA_BY_PROJECT_ID[id1].priority - DATA_BY_PROJECT_ID[id2].priority
      );
    }
  );

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
