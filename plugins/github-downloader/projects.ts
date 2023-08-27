import { graphql } from "@octokit/graphql";
import { z } from "zod";

let OCTOKIT_CLIENT: typeof graphql | null = null;

const maybeLoadOctokitClient = () => {
  if (OCTOKIT_CLIENT) {
    return;
  }
  if (process.env.GITHUB_TOKEN) {
    OCTOKIT_CLIENT = graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
  } else {
    console.log(
      "[GITHUB DOWNLOADER] No GITHUB_TOKEN found in .env. Skipping projects fetch."
    );
  }
};

export const Project = z.object({
  id: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  readme: z.string(),
  url: z.string(),
  items: z.object({
    nodes: z.array(
      z.object({
        creator: z.object({
          url: z.string(),
        }),
      })
    ),
  }),
  content: z.object({
    id: z.string(),
    title: z.string(),
    body: z.string(),
    url: z.string(),
    createdAt: z.string(),
    bodyUrl: z.string(),
  }),
});

export const Result = z.object({
  organization: z.object({
    projectsV2: z.object({
      nodes: z.any(),
    }),
  }),
});

export const maybeLoadProjectsFromOrg = async () => {
  maybeLoadOctokitClient();
  if (!OCTOKIT_CLIENT) {
    console.error(
      "[GITHUB DOWNLOADER] Couldn't update projects data. No authorized Octokit client found."
    );
    return null;
  }
  try {
    const projectsResponse = Result.parse(
      await OCTOKIT_CLIENT(`
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
    }`)
    );
    return projectsResponse.organization.projectsV2.nodes;
  } catch (e) {
    console.error(
      "[GITHUB DOWNLOADER] Couldn't update projects data. Error:",
      e
    );
    return null;
  }
};
