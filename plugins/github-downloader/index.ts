import { mkdir, writeFile } from "fs/promises";

import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import path from "path";

const DATA_PATH = path.resolve(process.cwd(), "src/_generated_data");
const octokit = new (Octokit.plugin(paginateRest))();

const destination = "../../";

export default function githubDownloader(context, options) {
  return {
    name: "github-downloader",
    async loadContent() {
      const labels = await octokit.paginate(
        "GET /repos/{owner}/{repo}/labels",
        {
          owner: "BobaBoard",
          repo: "issues",
        },
        (response) => response.data
      );
      return { labels };
    },
    async contentLoaded({ content, actions }) {
      await mkdir(DATA_PATH, { recursive: true });
      writeFile(
        path.resolve(DATA_PATH, "labels.json"),
        JSON.stringify(content.labels, null, 2)
      );
    },
  };
}
