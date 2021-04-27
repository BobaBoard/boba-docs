---
sidebar_position: 3
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
