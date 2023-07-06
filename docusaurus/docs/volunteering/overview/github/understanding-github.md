---
sidebar_position: 2
slug: /volunteering/github/understanding-github
---

# Understanding GitHub

[GitHub](https://github.com/) is a code collaboration website, that leverages a
tool called **git** to more easily manage different versions of a codebase
(a.k.a. **version control**). Git organizes code into **repositories** (ak.a.
**repos**). Each repo contains the files for a given project.

> **Version control is like a "save" program for your project.** By tracking and
> logging the changes you make to your file or file sets over time, a
> version-control system gives you the power to review or even restore earlier
> versions. Version control takes snapshots of every revision to your project,
> and you can then access these versions to compare or restore them as needed.

You can
[learn more about Git, GitHub and Version Control](https://blog.devmountain.com/git-vs-github-whats-the-difference)
in this article.

For GitHub tutorials, check out the
[GitHub Learning Lab](https://lab.github.com/).

For instructions on installing git, head to the
[Setup Your Development Environment](/docs/engineering/start-developing/setting-up-dev-env#gitgithub)
guide.

## How Git[Hub] Works

As developers make changes to a **repository**, **git** keeps track of the
edited files. Developers then collect related edits into a **commit**, labeled
with the summary of the change (e.g. "added feature X", "solved bug Y", "updated
documentation for Z"). **Commits** are then be **pushed** to GitHub, which
stores the updated code for everyone to access.

## The GitHub Workflow

To work on BobaBoard code, you will first need to **clone** the corresponding
GitHub repository to your own machine. Every developer will **clone** the same
repository, **commit** edited code on their own PC, and **push** **commits** to
GitHub for storage. Periodically, you will also need to **pull** updates from
GitHub to your own machine to keep the code in your **respository** up to date.

If **conflicts** between separate code edits arise, these are detected and
solved by git through a process called **merge**.

## Git Terminology

- `repo`: Short for `repository`. This refers to the project folder that git
  keeps track of, and all the files in it.
- `clone`: The act of copying the "remote" version of the repository on GitHub
  to your own machine.
- `fork`: Your own copy of a repo.
- `branch`: A separate version of a repo that can be edited without affecting
  the main repo.
- `commit`: A record of changes made to files in a git repo.
- `pull request`: A "request" that the other person "pull" the changes from your
  repo into their repo. Used to merge changes from one fork of a repo into
  another.
- `merge`: The process of combining changes made in two different versions of a
  repo (branch or fork) so that the receiving repo has all the changes made in
  both.

## Git FAQ

**Why do I have to fork to work on anything?**

Only the BobaLord is allowed to edit the original copy of BobaDocs. This is
good, because it prevents random people from showing up and screwing up the
site. This also means that _you_ can't edit them directly. Forking creates a
repo that you _can_ edit, from which you can send the changes you make back to
the original repo.

**Why are branches useful?**

Brances let developers separate what they're working on, so problems that arise
when working on one issue don't affect any other work that may be being done
concurrently. Making good use of branches is key to keeping a project history
easy to understand. It also keeps multiple people working on the same project
from stepping on each other's toes.
