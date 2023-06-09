/* eslint-disable */
import * as dotenv from "dotenv";

import { mkdir, readFile, writeFile } from "fs/promises";

import { maybeLoadLabelsFromRepo } from "./labels";
import { maybeLoadProjectsFromOrg } from "./projects";
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

console.log(path.resolve(process.cwd()));
console.log(path.resolve(process.cwd(), "./../.env"));

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof Environment> {}
  }
}

const DATA_PATH = path.resolve(process.cwd(), "src/_generated_data");

// TODO: this is not a docusaurus plugin anymore and it's more akin
// to a generic script. We should move it out of the plugins folder.
async function githubDownloader() {
  console.log(await readFile(path.resolve(process.cwd(), "./../.env"), "utf8"));
  const labels = await maybeLoadLabelsFromRepo();
  const projects = await maybeLoadProjectsFromOrg();

  await mkdir(DATA_PATH, { recursive: true });
  if (labels) {
    writeFile(
      path.resolve(DATA_PATH, "labels.json"),
      JSON.stringify(labels, null, 2)
    );
  }
  if (projects) {
    writeFile(
      path.resolve(DATA_PATH, "projects.json"),
      JSON.stringify(projects, null, 2)
    );
  }
}

githubDownloader();
