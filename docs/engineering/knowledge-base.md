---
sidebar_position: 5
---

# Knowledge Base

This page collects terms and concepts you're likely to encounter when developing for BobaBoard.

:::info
**Our goal is for these explanations to be accessible to newcomers.** If you're confused, consider it
a fault of this document rather than yours. Do reach out for help on any BobaBoard channel, and help us
improve through the "edit this page" button at the bottom 👇.
:::

## GitHub

[GitHub](https://github.com/) is a code collaboration website, that leverages a tool called **git** to more easily organize code. Git organizes code into **repositories** (also called **repos**), which include all the files for a given project.

### How Git[Hub] Works

As developers make changes to a **repository**, **git** keeps track of the edited files. Developers then collect related edits into a **commit**, labeled with the summary of the change (e.g. "added feature X", "solved bug Y", "updated documentation for Z"). **Commits** are then be **pushed** to GitHub, which stores the updated code for everyone to access.

### The GitHub Workflow

To work on BobaBoard code, you will first need to **clone** the corresponding GitHub repository to your own machine. Every developer will **clone** the same repository, **commit** edited code on their own PC, and **push** **commits** to GitHub for storage. Periodically, you will also need to **pull** updates from GitHub to your own machine to keep the code in your **respository** up to date.

If **conflicts** between separate code edits arise, these are detected and solved by git through a process called **merge**.

### Git Terminology

- `repo`: Short for `repository`. This refers to the project folder that git keeps track of, and all the files in it.
- `fork`: Your own copy of a repo.
- `branch`: A separate version of a repo that can be edited without affecting the main repo.
- `commit`: A record of changes made to files in a git repo.
- `pull request`: A "request" that the other person "pull" the changes from your repo into their repo. Used to merge changes from one fork of a repo into another.
- `merge`: The process of combining changes made in two different versions of a repo (branch or fork) so that the receiving repo has all the changes made in both.

### Git FAQ

**Why do I have to fork to work on anything?**

Only the BobaLord is allowed to edit the original copy of BobaDocs. This is good, because it prevents random people from showing up and screwing up the site. This also means that _you_ can't edit them directly. Forking creates a repo that you _can_ edit, from which you can send the changes you make back to the original repo.

**Why are branches useful?**

Brances let developers separate what they're working on, so problems that arise when working on one issue don't affect any other work that may be being done concurrently. Making good use of branches is key to keeping a project history easy to understand. It also keeps multiple people working on the same project from stepping on each other's toes.

## Caches and Optimistic Updates {#caches}

A cache is a temporary storage location that saves data from slow queries (e.g. network queries, database queries) for faster access. Caches are used to quickly retrieve data that hasn't changed, reducing the load on the system and giving the illusion of faster operations. They're also used to retrieve partial pre-existing data to display while loading the full data in the background.

BobaBoard uses two main caches:

- A frontend cache that stores and manages data from the backend. This uses [React Query](https://react-query.tanstack.com/).
- A backend cache that manages rerely-changing data (e.g. board details). This uses [Redis](https://redis.io/).

### Optimistic Updates

Optimistic updates are used in the frontend to give the illusion of quick data-modifying operations (e.g. updating tags, board descriptions). Rather than wait for the server to confirm the operation succeeded, the updated data is immediately saved in the cache and displayed. If the server returns success, no further action is needed. If the server fails, an error message is shown and the cache is reverted to the previous state.
