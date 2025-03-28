---
sidebar_position: 7
---

# Development Lifecycle

:::TODO

Consider making this doc a folder with multiple sections and moving to the Volunteering section

:::

If you're new to collaborating on a code project, you may be wondering what that process looks like. This page will:

- give an overview of the development lifecycle
- explain key terminology
- guide you through the step-by-step process of contributing to BobaBoard's codebase.

This document also includes relevant information about git and GitHub to introduce you to technical vocabulary you might run into. For more information on these subjects you can look at our [Git Notes](/docs/development/legacy-pages/git-notes.md) page.

:::note

We will use GitHub as our example platform since BobaBoard's code is hosted there. However, there are alternative platforms that serve similar purposes.

:::

## Overview

So, you've decided to contribute to a project. What happens next?

### 1. **Add a copy of the project's code to your own GitHub account.**

The first step is to get a copy of the project's code into your own GitHub account by "forking" it. This will allow you to make as many changes to the code as you desire without impacting the original project.

### 2. **Download the code from your GitHub account to your computer.**

Before you can start making changes, you need to get the code on your computer. This way you can edit the code in the comfort of your own ~~home~~ code editor. This is done by downloading or, in technical terms, 'cloning' the code from your GitHub account.

### 3. **Create a Branch in the code to keep your changes contained.**

You get to create parallel versions of the code so you can work on different unrelated things at the same time without getting them tangled.

### 4. **Make changes and set checkpoints as you get small tasks done.**

It's always good to break up any tasks into smaller steps. Regularly marking checkpoints as you accomplish small tasks will let you see all the steps you took along the way and course-correct in case of issues. In technical terms, marking checkpoints by logging changes with descriptive messages in git is referred to as 'committing'. When you commit you are saving your changes to your own branches on your fork, not to the original repo.

### 5. **Backup your changes to your remote.**

As you make commits, you are saving your code locally in git. To get those changes to GitHub you have to "push" them to your remote of your fork.

### 6. **Share your work with the repo maintainers.**

So far, you've been working on your own copy of the code. Once you're ready, you can ask the project maintainers (for BobaBoard this is ms. boba or other volunteers) to take a look at what you've done and give feedback. This is called "creating a pull (or merge) request". You might also see it abbreviated as "a PR". To make sure the repo maintainers see your changes, your pull request should be on "upstream"

### 7. **Get feedback and make adjustments.**

The owner of the project (and/or your fellow contributors) may suggest changes or point out bugs in your code. This process is called a 'code review'. If changes are requested, you should make the changes and request another code review when the changes are complete. It could take more than one round of code reviews, and you may receive reviews from multiple people. If advice is unclear or you're uncertain what they're asking for, you should ask questions. Code reviews are discussions!

### 8. **Success! Your changes are now included in the project.**

Eventually the project will accept your changes and add them to the codebase by merging them to a branch in the main repo.

### 9. **Keep your code up to date.**

You did the thing and now you (and everyone else with a copy of the project on their PC) should get the new and updated version of the code - the one that includes your latest edits! You need to 'pull' the changes.

## Guide

The following is a more in-depth guide to the steps one would follow to contribute to one of Boba's codebases.

:::note

If you've looked at our [Recommended Tools](/docs/development/knowledge-base/recommended-tools.md) document, you've seen we recommend Visual Studio Code (VS Code) as a code editor. One reason for this is its excellent integration with git. This lets you perform various tasks using the editor's user interface instead of typing commands in your terminal. Feel free to use integrations if you prefer.

:::

### 1. Fork the repository on GitHub

Forking creates an exact copy of the entire codebase to your own GitHub account. This includes all its files and the history of changes. You own this copy (in terms of permissions) and it's completely separate from the original. No matter what changes you make, the original codebase (often referred to as `upstream`) will remain unchanged.

You can [fork a repository on GitHub](https://docs.github.com/en/get-started/quickstart/fork-a-repo) from its web interface by going to the repository's URL. For example, the repository for this documentation is `https://www.github.com/BobaBoard/boba-docs`, where `BobaBoard` is the name of the owner of the repository, and `boba-docs` is the repository's name.

Once you've created a fork, this copy will live somewhere that looks like so: `https://www.github.com/<YOUR_GITHUB_USERNAME>/<REPOSITORY_NAME>`

:::info

The name of your fork doesn't have to match the name of the original project. For this guide, however, we'll assume you have kept the same name.

:::

### 2. Clone your fork to your machine

Cloning means copying the code that is stored in your GitHub account to your local machine. It doesn't really matter where you want to do this, as long as you have permission to create files. We suggest suggest creating a folder to keep all your BobaBoard-related coding in.

:::danger Windows Subsystem for Linux (WSL)

If you are coding for BobaBoard on Windows, we recommend setting up Windows Subsystem for Linux (WSL). When you create your folders for your BobaBoard project, they will need to be in the WSL file tree, not your normal Windows file explorer. For more in depth information please see [](/docs/development/start-developing/wsl).

:::

To clone the repository you need to tell git where the code you want to copy is stored. Simply put, you need a URL. Your repository's URL is the web address you use to view it on GitHub with a `.git` at the end.

For example, if the URL you can copy from your browser's navigation bar is: `https://github.com/<YOUR_GITHUB_USERNAME>/boba-components` then the URL you'll need to use when cloning is: `https://github.com/<YOUR_GITHUB_USERNAME>/boba-components.git`.

GitHub has a button in its interface to get this URL.

:::TODO

Add explanation about HTTPs versus SSH.

:::

When you run the clone command a new folder named after the repository will be created and all the files will be stored inside. Navigate to the folder where you want to store the project and then run the clone command.

```bash showLineNumbers
cd /home/<USER>/code-projects/bobaboard
git clone <REPOSITORY_URL>
```

After cloning the boba-repos and creating personal projects you might end up with a folder structure that looks something like this:

```txt
/home
├─ /<USER_NAME>
│  ├─ code-projects/
│  │  ├─ bobaboard/
│  │  │  ├─ boba-backend/
│  │  │  ├─ boba-components/
│  │  │  ├─ boba-docs/
│  │  │  ├─ boba-editor/
│  │  ├─ boba-tan-shrine/
│  │  ├─ personal-website/
```

We want our local copy of the code to be able to interact and reference both the original codebase and the fork we made. To do this you need to make sure that the local copy of the code that lives in your machine correctly points to both of these GitHub repositories (the one that belongs to the BobaBoard organization, and the one in your own account).

The clone you just created already points to your own GitHub account repo, but you'll need to add the repository you originally forked from manually.

Using boba-docs as an example:

```bash
# add a reference to a remote repository and call it 'upstream'
git remote add upstream https://github.com/BobaBoard/boba-docs.git

# check to make sure your local repo correctly points at the remotes
git remote --verbose

> origin https://github.com/<YOUR_GITHUB_USERNAME>/boba-docs.git (fetch)
> origin https://github.com/<YOUR_GITHUB_USERNAME>/boba-docs.git (push)
> upstream  https://github.com/BobaBoard/boba-docs.git (fetch)
> upstream  https://github.com/BobaBoard/boba-docs.git (push)
```

### 3. Create a branch for your edits

When you initially clone the repository, you'll only have a main branch. This is the "official" version of the code or its current canon.

Instead of making your changes there, you'll create a new branch where you can experiment freely. You'll want to give each branch you create a descriptive name to make it easier to find later if you switch to working on something else. For example, if you're working on adding a "read more" feature to the editor, you might create a branch called `read-more`.

Branches help you work on different parts of the project at the same time. You can switch between branches to focus on specific tasks or experiments. If something goes wrong or you don't like the changes in a branch, you can just delete it without affecting the main code or losing any unrelated work.

```bash showLineNumbers
# create a new branch
git branch read-more

# see available branches, the one you're on has an asterisk (*)
git branch --list
>read-more
> * main

# note that to get exit the list view you'll need to press 'q'

# switch to your new branch
git checkout read-more

# delete a branch
git branch --delete read-more
```

### 4. Commit changes to your branch

As you write code, you'll use git to "commit" your changes at different points. Committing creates a sort of checkpoint which is helpful when you need to check your progress after being away from the project for a bit and to undo or troubleshoot issues that arise as you add more and more changes.

It could be helpful to think of commits as marking milestones in your journey. You don't need to commit every single line edit you make separately, but as you code you'll notice it makes sense to group certain changes together into a unit of work.

For example, when working on the `read-more` branch, you might commit your code with the following messages:

- 1st commit: `Add read more button`
- 2nd commit: `Style read more button`
- 3rd commit: `Display text when read more button is clicked`

:::tip Keep it short and sweet

Commit messages have limited characters. It's best to make them descriptive enough so future-you and whoever is reading your code understands what you've been up to but not so long the important ideas don't fit in a single line. Multi-line commits are also possible and can be used to detail more information.

:::

It's simple but in practice most of us have trouble remembering to make commits regularly and writing informative messages when we do. Don't worry too much about it, if you struggle you're in good company.

### 5.

### 6. Open a "pull request" on the original codebase

When you want to show your fellow project collaborators the changes you're proposing, you will open a "pull request". Pull requests give everyone the opportunity to see the code and add comments before it's added to the codebase as canonical.

You can open a pull request (PR) by visiting your forked repo on GitHub. When your fork and the original project look different GitHub will show you a button offering to open a PR. When you click this button you'll be able to see a color-coded before and after of all the edits you have made (this is called a 'diff', since it shows you the differences between two things).

![An image of the Pull Request button on the main repo page.](/img/legacy/devenv3.png)

Here, you'll write a brief description of the changes you've worked on. You can request specific people to take a look at your PR, but not everyone will know what you're working on, so you should do your best to explain it so even those with no context understand.

:::tip Open Pull Requests Early

It can be a good idea to open pull requests even before your changes are fully ready to be merged. This allows you to start a conversation about the code you're working on and get early feedback that can save you time on changes later.

:::

### 7. The codebase owners review (and eventually "merge") the pull request

Once the pull request has been submitted for review, the repo maintainers will review the changes made and might request edits to the code. You could receive comments requesting changes to code or asking clarifying questions. This is normal and expected, and is not a reflection of your skills.

Feedback may include:

- fixing bugs you might have missed (it always helps to get a second pair of eyes!)
- editing for consistency with the rest of the codebase
- discussing an unforeseen issue with the code you're adding

Most often, code reviews are a matter of the maintainer enforcing consistency in the codebase, spotting bugs you might have missed, or asking to make code clearer for someone that has never read it before. You should feel free to ask clarifying questions concerning requested changes or to push back if you disagree with a request.

The review process may entail multiple rounds of back and forth between the pull requester and the maintainers, and the developer often adds new commits to the pull request with the requested changes as the process is repeated.

:::note How to Make Requested Changes

When changes are requested, you will see comments on the pull request you have submitted. Simply write code, commit and push until all comments are resolved. Then go back to the pull request, check that everything is in order, and request for another review. You should mark the comments you have addressed as done by using the "resolve conversation" button.

:::

Once the pull request is approved, the pull request is "merged" and "closed". Once merged, your code becomes part of the `main` branch in the original `upstream` codebase. You can now delete the "feature branch" created in step 1.

:::tip Branch Maintenance

You can use GitHub's "Delete Branch" button to delete your branches, but you might find that your local branches still appear in VS Code or that your own fork still has branches you thought were deleted showing, where you've tracked them previously. You can use the below commands to delete and prune branches.

```bash showLineNumbers
# To delete your local branch
git branch -D branch-name

# To clean up your fork's remote branches
git remote prune origin

# To clean up the main repo's remote branches
git remote prune upstream
```

:::

### 8. Pulling from upstream

Now that the feature code has been merged to the `upstream main` branch, the code in the `main` branch of your fork (which doesn't contain the original feature) is out of date. To download the updated code, you "pull" the changes from the `upstream` codebase. This copies all the new code commits in the upstream codebase to both your fork and its local clone.
...

As you work, it's very likely other people will have made pull requests that will have been accepted to the original codebase you've forked from. To update your own fork and local copies to reflect the changes of "upstream" (the original codebase) run:

```bash showLineNumbers
git pull upstream main
```

:::caution

Do not use `git pull` when there are uncommitted changes in your worktree. In this case you'll want to use `git fetch upstream main`, and then merge after you've committed.

:::

### 9. Continuing your work

To continue your work (whether it's adding a new feature, cleaning up code, or squashing bugs), you will repeat the same process starting from step 1.
