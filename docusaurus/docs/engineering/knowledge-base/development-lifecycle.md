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

This document also includes relevant information about git and GitHub to slowly get you familiar with more technical vocabulary you might run into. For more information on these subjects you can look at our [Git Notes](/docs/engineering/legacy-pages/git-notes.md) page.

:::note
We will use GitHub as our example platform since BobaBoard's code is hosted there. However, there are alternative platforms that serve similar purposes.
:::

## Overview

So, you've decided to contribute to a project. What happens next?

1. **Add a copy of the project's code to your own GitHub account.**

   > This first step involves getting your own version of the project's code to edit to your heart's content. In technical terms, this means creating a 'fork' of the project you want to contribute to.

1. **Download the code (from your GitHub account) to your computer.**

   > You need to get the code onto your computer to start making changes. This way you can edit the code in the comfort of your own ~~home~~ code editor. This is done by downloading or, in technical terms, 'cloning' the code from your GitHub account.

1. **Create a Branch in the code to keep your changes contained.**

   > You get to create parallel versions of the code so you can work on different unrelated things at the same time without getting them tangled.

1. **Make changes and set checkpoints as you get small tasks done.**

   > It's always good to break up any tasks into smaller steps, and setting checkpoints regularly will let you see all the steps you took along the way. In technical terms, we call logging changes with descriptive messages in git 'making commits'.

1. **Share your work with the project owners**.

   > You've been working on your own personal copy of the code so far. Once you're ready, you can ask the people involved in the project to take a look at what you've done so you can get feedback. In technical terms this is called 'creating a pull (or merge) request'

1. **Get feedback and make adjustments**.

   > The owner of the project (and/or your fellow contributors) may suggest changes or point out bugs in your code. This process is called a 'code review'.

1. **Success! Your changes are now included in the project.**

   > It could take more than one round of code reviews but eventually the owner of the project will accept your changes and add them to the codebase. In technical terms, your changes will be 'merged' into the codebase.

1. **Keep your code up to date.**

   > You did the thing and now you (and everyone else with a copy of the project on their PC) should get the new and updated version of the code - the one that includes your latest edits! In technical terms, you need to 'pull' the changes.

## Guide

The following is a more in-depth guide to the steps one would follow to contribute a simple change to one of Boba's codebases.

:::note
If you've looked at our [Recommended Tools](/docs/engineering/knowledge-base/recommended-tools.md) document, you've seen we recommend Visual Studio Code as a code editor. One reason for this is its excellent integration with git. This lets you perform various tasks using the editor's user interface instead of typing commands in your terminal. Feel free to use integrations if you prefer. However, we will still list the commands here so that everyone can follow along and understand what's happening behind the scenes.
:::

### 1. Fork the repository on GitHub

Forking creates an exact copy of the entire codebase to your own GitHub account. This means all it's files and the history of changes. You own this copy (in terms of permissions) and it's completely separate from the original. No matter what changes you make, the original codebase (often referred to as `upstream`) will remain unchanged.

You can fork a repository on GitHub from its web interface by going to the repository's URL. For example, the repository for this documentation is `https://www.github.com/BobaBoard/boba-docs`, where `BobaBoard` is the name of the owner of the repository, and `boba-docs` is the repository's name.

Once you've created a fork, this copy will live somewhere that looks like so: `https://www.github.com/<YOUR_GITHUB_USERNAME>/<REPOSITORY_NAME>`

:::info
The name of your fork doesn't have to match the name of the original project. For this guide, however, we'll assume you have kept the same name.
:::

### 2. Clone your fork to your machine

This means copying the code that is stored in your GitHub account to your PC. It doesn't really matter where you want to do this (make sure you have permissions?), though you might want to create a folder to keep all your BobaBoard-related coding in. For example: `/home/NAME/code-projects/bobaboard`.

:::danger

Windows users using WSL will want to pay extra attention.

:::TODO
be less mysterious about it...
:::


:::

In order to clone the repository you need to tell git where the code you want to copy is stored. Simply put, you need a URL. Your repository's URL is simply the web address you use to view it on GitHub with a `.git` at the end. Meaning that if the URL you can copy from your browser's navigation bar is: `https://github.com/<YOUR_GITHUB_USERNAME>/boba-components` then the URL you'll need to use when cloning is:  `https://github.com/<YOUR_GITHUB_USERNAME>/boba-components.git`.

GitHub actually has a handy button in its interface to get this URL.

:::TODO
add screenshot?
:::

:::caution On HTTPS vs SSH
There's HTTPS and SSH..?
:::

When you run the clone command a new folder named after the repository will be created and all the files will be stored inside. Navigate to the folder where you want to store the project and then run the clone command.

```bash   showLineNumbers
cd /home/<USER>/code-projects/bobaboard
git clone <REPOSITORY_URL>
```

After cloning a few boba-repos and making a few personal projects you might end up with a folder structure that looks something like this:

```none
/home
├─ /<USER_NAME>
│  ├─ code-projects/
│  │  ├─ bobaboard/
│  │  │  ├─ boba-components/
│  │  │  ├─ boba-docs/
│  │  │  ├─ boba-editor/
│  │  ├─ boba-tan-shrine/
│  │  ├─ personal-website/
```

One thing to keep in mind is that the code of a project can change fairly often, meaning you'll want to keep your fork in sync with the original repository, and your clone in sync with your fork. To do this you need to make sure that the local copy of the code that lives in your machine correctly points to both of these GitHub repositories (the one that belong to the BobaBoard organization, and the one in your own account).

The clone you just created actually already points to your own GitHub account repo, but you'll need to add the original repository you forked from manually.

Using boba-docs as an example:

```bash
# add a reference to a remote repository and call it 'upstream'
git remote add upstream https://github.com/BobaBoard/boba-docs.git

# check to make sure your local repo correctly points at the remotes
git remote --verbose

> origin    https://github.com/<YOUR_GITHUB_USERNAME>/boba-docs.git (fetch)
> origin    https://github.com/<YOUR_GITHUB_USERNAME>/boba-docs.git (push)
> upstream  https://github.com/BobaBoard/boba-docs.git (fetch)
> upstream  https://github.com/BobaBoard/boba-docs.git (push)
```


### 3. Create a branch for your edits

When you initially clone the repository, you'll be looking at the `main` branch of the code. This is like the "official" version of the code, the current canon, if you will.

Instead of making your changes there, you'll create a new branch where you can experiment freely. You'll want to give each branch you create a descriptive name to make it easier to find later if you switch to working on something else. For example, if you're working on adding a "read more" feature to the editor, you might create a branch called `read-more`.

Branches help you work on different parts of the project at the same time. You can switch between branches to focus on specific tasks or experiments. If something goes wrong or you don't like the changes in a branch, you can just delete it without affecting the main code or losing any unrelated work.

```bash   showLineNumbers
# create a new branch
git branch read-more

# see available branches, the one you're on has an asterisk (*)
git branch --list
>   read-more
> * main

# note that to get exit the list view you'll need to press 'q'

# switch to your new branch
git checkout read-more

# delete a branch
git branch --delete read-more
```

:::TODO
Actually look up what that cursed checkout command does..
:::

### 4. Commit changes to your branch

As you write code, you'll use git to "commit" your changes at different points. Committing creates a sort of checkpoint which is helpful when you need to check your progress after being away from the project for a bit and to undo or troubleshoot issues that arise as you add more and more changes.

It could be helpful to think of commits as marking milestones in your journey. You don't need to commit every single line edit you make separately, but as you code you'll notice it makes sense to group certain changes together into a unit of work.

For example, when working on the `read-more` branch, you might commit your code with the following messages:

- 1st commit:  `Add read more button`
- 2nd commit: `Style read more button`
- 3rd commit: `Display text when read more button is clicked`

:::tip Keep it short and sweet
As you can see in the examples, commits are pretty short. It's best to make them descriptive enough so future-you and whoever is reading your code understands what you've been up to but not so long that they don't fit in a single line
:::

It's simple but in practice most of us have trouble remembering to make commits regularly and writing informative messages when we do. Don't worry too much about it, if you struggle you're in good company.

---

:::TODO
continue edit below
:::

### 5. Open a "pull request" on the original codebase

This is when you actually show your fellow project collaborators the changes you're proposing. This gives everyone the opportunity to look at the code and make comments, before it's eventually added to the official codebase.

You can open a pull request (PR) by visiting your forked repo on GitHub. When your fork and the original project look different GitHub will show you a button offering to open a PR. When you click this button you'll be able to see a color-coded before and after of all the edits you have made (this is called a 'diff', since it shows you the differences between two things).

   ![An image of the Pull Request button on the main repo page.](/img/legacy/devenv3.png)

Here, you'll write a brief description of the changes you've worked on. You can request specific people to take a look at your PR, but not everyone will know what you're working on, so you should do your best to explain it so even those with no context understand.

:::TODO
add a note about opening PRs early, even if your feature is not finished, bc its a good way for people to offer guidance
:::

### 6. The codebase owners review (and eventually "merge") the pull request

Once the pull request has been submitted for review, the codebase owners will review the changes made and might request edits to the code. The review process usually entails multiple rounds of back and forth between the developer and the codebase owners, and the developer often adds new commits to the pull request with the requested changes.

Once the pull request is approved, the pull request is "merged" and then "closed". Once merged, the developer's code becomes part of the `master` branch in the original `upstream` codebase. The developer can now delete the "feature branch" created in step 1.

The feedback will vary a lot.

- fix bugs you might have missed (it always helps to get a second pair of eyes!)
- edit for consistency with the rest of the codebase
- discuss an unforseen issue with the code you're adding

...

There will be a bit of back and forth, and you might get comments requesting to change some of your code or asking clarifying questions. This is normal and expected: no engineer, no matter how senior, never gets comments and questions on their code. It's just part of the job, and not a reflection of your skills.

Most often, code reviews are just a matter of the maintainer enforcing consistency in the codebase, or spotting bugs you might have missed (like we all do), or asking to make code clearer for someone that has never read it before. Always feel free to ask clarifying questions, or to push back if you disagree with something.

Once your pull request is merged (aka accepted in the main codebase), you can delete your branch. Github has a easy button for you to do so.

#### How to Make Requested Changes

When changes are requested, you will likely see comments on the pull request you have submitted. Simply go back to step 2, write code, commit and push until all comments are fixed. Then go back to the pull request, check that everything is in order, and ask for an additional review. You should mark the comments you have addressed as done by using the "resolve convo" button.

### 7. Pulling from upstream

Now that the feature code has been merged to the `upstream master` branch, the code in the `master` branch of the developer's fork (which doesn't contain the original feature) is out of date. To download the updated code, the developer "pulls" the changes from the `upstream` codebase. This copies all the new code commits in the `upstream` codebase to the developer's.

...

When you go back to the codebase, it's likely that more changes will have been made on the original BobaBoard codebase your code is forked from. To update your git fork to reflect the changes of "upstream" (aka the original codebase) run the following command.

```bash   showLineNumbers
git pull upstream master
```

You can now go back to step 1 and make new changes all over again.

### 8. Working on a new feature

To work on a new feature, the developer repeats the same process starting from step 1.
