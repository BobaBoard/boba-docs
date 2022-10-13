import * as dotenv from "dotenv";

import { mkdir, writeFile } from "fs/promises";

import { Octokit } from "@octokit/core";
import { graphql } from "@octokit/graphql";
import { paginateRest } from "@octokit/plugin-paginate-rest";
import path from "path";

// NOTE: .env file will be read from under the docusaurus main folder (since that's
// where the script is run from)
dotenv.config();

const DATA_PATH = path.resolve(process.cwd(), "src/_generated_data");
const octokit = new (Octokit.plugin(paginateRest))();

const destination = "../../";
const authenticatedGraphqlClient = process.env.GITHUB_TOKEN
  ? graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    })
  : null;

// TODO: allow the repo to be passed via configuration
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

      let projects = null;
      if (authenticatedGraphqlClient) {
        const projectsResponse = await authenticatedGraphqlClient(`
        {
          organization(login: "bobaboard") {
            projectsV2(first: 20) {
              nodes {
                id
                title
                shortDescription
                readme
                url
                items(first: 20) {
                  nodes {
                    creator {
                      url
                    }
                    content {
                      ... on DraftIssue {
                        title
                        body
                      }
                      ... on Issue {
                        id
                        title
                        body
                        url
                        createdAt
                        bodyUrl
                      }
                      ... on PullRequest {
                        id
                        title
                        body
                        url
                        updatedAt
                      }
                    }
                  }
                }
                repositories(first: 20) {
                  nodes {
                    name
                    url
                  }
                }
                views(first: 20) {
                  nodes {
                    id
                    name
                    layout
                  }
                }
              }
            }
          }
        }`);
        // @ts-expect-error
        projects = projectsResponse.organization.projectsV2.nodes;
      } else {
        console.log(
          "No authenticated GraphQL client found. Skipping projects update."
        );
      }
      return { labels, projects };
    },
    async contentLoaded({ content, actions }) {
      await mkdir(DATA_PATH, { recursive: true });
      writeFile(
        path.resolve(DATA_PATH, "labels.json"),
        JSON.stringify(content.labels, null, 2)
      );
      if (content.projects) {
        writeFile(
          path.resolve(DATA_PATH, "projects.json"),
          JSON.stringify(content.projects, null, 2)
        );
      }
    },
  };
}
