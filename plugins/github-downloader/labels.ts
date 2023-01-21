import { Octokit } from "@octokit/core";
import { paginateRest } from "@octokit/plugin-paginate-rest";

export const maybeLoadLabelsFromRepo = async () => {
  const octokit = new (Octokit.plugin(paginateRest))();
  try {
    return await octokit.paginate(
      "GET /repos/{owner}/{repo}/labels",
      {
        owner: "BobaBoard",
        repo: "issues",
      },
      (response) => response.data
    );
  } catch (e) {
    console.error("[GITHUB DOWNLOADER] Couldn't update labels data. Error:", e);
    return null;
  }
};
