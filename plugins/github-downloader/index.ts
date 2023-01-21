/* eslint-disable */
import * as dotenv from "dotenv";

import { mkdir, writeFile } from "fs/promises";

import path from "path";
import { z } from "zod";

const Environment = z.object({
  GITHUB_TOKEN: z.string().optional(),
});

// NOTE: .env file will be read from under the docusaurus main folder (since that's
// where the script is run from)
Environment.parse(
  dotenv.config({
    path: path.resolve(process.cwd(), "./../.env"),
  })
);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof Environment> {}
  }
}

import { maybeLoadLabelsFromRepo } from "./labels";
import { maybeLoadProjectsFromOrg } from "./projects";

const DATA_PATH = path.resolve(process.cwd(), "src/_generated_data");

// TODO: allow the repo to be passed via configuration
export default function githubDownloader() {
  return {
    name: "github-downloader",
    async loadContent() {
      const labels = await maybeLoadLabelsFromRepo();
      const projects = await maybeLoadProjectsFromOrg();

      return { labels, projects };
    },
    async contentLoaded({
      content,
    }: {
      content: {
        labels: Awaited<ReturnType<typeof maybeLoadLabelsFromRepo>>;
        projects: Awaited<ReturnType<typeof maybeLoadProjectsFromOrg>>;
      };
    }) {
      await mkdir(DATA_PATH, { recursive: true });
      if (content.labels) {
        writeFile(
          path.resolve(DATA_PATH, "labels.json"),
          JSON.stringify(content.labels, null, 2)
        );
      }
      if (content.projects) {
        writeFile(
          path.resolve(DATA_PATH, "projects.json"),
          JSON.stringify(content.projects, null, 2)
        );
      }
    },
  };
}
