---
sidebar_position: 7
---

# Development Lifecycle

To look at/download BobaBoard's code, check out our guide to [Setting Up your Coding Environment](/docs/engineering/start-developing/before-you-start).
You might also be interested in [Git Notes](/docs/engineering/legacy-pages/git-notes)

:::tip This seems scarier than it is!
If you're new to coding and github, the following process might seem scary and overwhelming. Don't worry: it will become second nature very quickly! If you want someone to hold your hand throughout the process, contact Ms. Boba.
:::

:::note
TODO[Ms.Boba]: Explore whether the new github command line interface can make this process less cumbersome.
:::

## Development lifecycle overview

At a high level, the git development lifecycle follows these steps:

0. **The developer "forks" the code.** This creates a separate copy of the codebase owned by the developer itself. No matter what changes the developer makes, the original codebase (called `upstream`) will remain unchanged.
1. **The developer creates a "feature branch" on their "fork".** When the developer first forks the code, they are placed on the official "current version" of the codebase, called `master` (or `main`). Rather than modify `master` directly, the developer then creates a "feature branch" to make their edits on.

   For example, if the developer is working on adding a "read more" feature, they might create a branch called `read-more`. Creating branches allows a developer to work on many independent features at the same time.

2. **The developer "commits" code changes to their "feature branch".** As the developer writes code, they will modify the code in the branch they're working on. Periodically, the developer will then "commit" the changes made. Committing creates "code checkpoints", and is helpful to split code creation in logical segment that are easier to reason about and check for correctness.

   For example, when working on the `read-more` branch, the developer might create the following commits:

   - Commit 1: Add read more button
   - Commit 2: Style read more button
   - Commit 2: Display read more text when button is clicked

3. **The developer opens a "pull request" on the original codebase.** Once the new feature is complete, it should become part of the "official" codebase. To do so, the developer must ask the codebase owners to copy the commits made in step 2 to the `master` branch of the original `upstream` codebase. This process is called opening a "pull request".
4. **The codebase owners review (and eventually "merge") the pull request.** Once the pull request has been submitted for review, the codebase owners will review the changes made and might request edits to the code. The review process usually entails multiple rounds of back and forth between the developer and the codebase owners, and the developer often adds new commits to the pull request with the requested changes.

   Once the pull request is approved, the pull request is "merged" and then "closed". Once merged, the developer's code becomes part of the `master` branch in the original `upstream` codebase. The developer can now delete the "feature branch" created in step 1.

5. **Pulling from upstream.** Now that the feature code has been merged to the `upstream master` branch, the code in the `master` branch of the developer's fork (which doesn't contain the original feature) is out of date. To download the updated code, the developer "pulls" the changes from the `upstream` codebase. This copies all the new code commits in the `upstream` codebase to the developer's.
6. **Working on a new feature.** To work on a new feature, the developer repeats the same process starting from step 1.

### 0. Create a fork

If you haven't been explicitly added to the repository you're contributing to, you will need to create a "fork" you own and upload the changes there before opening a pull request (aka "please, BobaLord, merge my code into the official BobaBoard codebase", see [Git Notes](/docs/engineering/legacy-pages/git-notes) ). Unless you know what you're doing and have forked before running `git clone`, follow these instructions to change your `clone` into `fork`.

1. Go to the **github website** (you must be logged in) and click on the fork button at the top-right corner of the repository you want.

   ![The fork button is located on the top right of the page.](/img/legacy/devenv1.png)

2. Take note of the new git address of your forked repository. It should be something like `https://github.com/YOUR-USERNAME/BOBABOARD-REPO.git`. You can find it on the main page of your new forked repo, under code.

   ![The URL of our new repo is under the "Code" dropdown on your repo's main page.](/img/legacy/devenv2.png)

3. Run the following commands from your terminal, in the root folder of the repo that you want to upload.

```bash
git config --get remote.origin.url | xargs git remote add upstream
git remote set-url origin YOUR_NEW_REMOTE_URL_HERE
git fetch
```

:::warning
If you want to use a different GitHub account for BobaBoard, your `origin` URL
will be different. Follow the instructions in the ["use a different GitHub account" section](#extra-use-a-different-github-account).
:::

At this point, you can proceed with the regular flow for a pull request.

### 1. Create a branch off of `master` for your new feature

In the folder for your **forked** repository (see step 0) run

```bash
git branch -f new-feature-name
git checkout new-feature-name
```

Of course you can swap `new-feature-name` with whatever string represents what you're trying to do.

**TIP:** if you want to work on multiple changes at the same time, you can maintain different branches with separate code (see [Git Notes](/docs/engineering/legacy-pages/git-notes)). Just run the code above to create another branch, and you can then switch between branches using `git checkout my-branch`. Code changes aren't shared between branches.

### 2. Write code

Write the most revolutionary piece of code the world has ever seen. Once you're done, commit it (basically, create a checkpoint) to your repository by running:

```bash
# Add all the modified files to the present commit
git add .
# Actually commit all the added files
git commit -m "this is a description of what my whole commit is about"
# Push your changes to the github website (remote repository)
# on the new-feature-name branch
git push origin new-feature-name
```

**TIP:** you can do this multiple times as you code to split your work in "logical segments". This is good practice, but don't feel too bad if you commit everything together because BobaLord is also extremely bad at clean commits and will not judge you.

### 3. Create a pull request on Github

Once you're done, it's time to open a pull request (again, also known as "please, BobaLord, merge my code into the official BobaBoard codebase"). To do so:

1. Go to your **forked repo** on the **github** website
2. You should see a message like the one in yellow here. Click on Compare & pull request.

   ![An image of the Pull Request button on the main repo page.](/img/legacy/devenv3.png)

3. Write a description and click on "create pull request". Try to explain what you did and why as if the person reading it had zero context for it and was eager to go back to reading hot fanfictions. That is, try to be precise but concise.

### 4. Submit for review

There will be a bit of back and forth, and you might get comments requesting to change some of your code or asking clarifying questions. This is normal and expected: no engineer, no matter how senior, never gets comments and questions on their code. It's just part of the job, and not a reflection of your skills.

Most often, code reviews are just a matter of the maintainer enforcing consistency in the codebase, or spotting bugs you might have missed (like we all do), or asking to make code clearer for someone that has never read it before. Always feel free to ask clarifying questions, or to push back if you disagree with something.

Once your pull request is merged (aka accepted in the main codebase), you can delete your branch. Github has a easy button for you to do so.

#### How to Make Requested Changes

When changes are requested, you will likely see comments on the pull request you have submitted. Simply go back to step 2, write code, commit and push until all comments are fixed. Then go back to the pull request, check that everything is in order, and ask for an additional review. You should mark the comments you have addressed as done by using the "resolve convo" button.

### 5. Pulling from upstream

When you go back to the codebase, it's likely that more changes will have been made on the original BobaBoard codebase your code is forked from. To update your git fork to reflect the changes of "upstream" (aka the original codebase) run the following command.

```bash
git pull upstream master
```

You can now go back to step 1 and make new changes all over again.

## Extra: Use a different GitHub account

If you already have a GitHub account set up on your machine and want to use a different one for BobaBoard, you can use the following instructions:

### 0. Create a special folder to house BobaBoard code

This is the folder you're going to `clone` the BobaBoard repositories in.

### 1. Set Up your Git username and email

In your new folder, run the following commands to set up the new user:

```bash
git config user.name YOUR_BOBABOARD_GITHUB_USERNAME_HERE
git config user.email YOUR_BOBABOARD_GITHUB_EMAIL_HERE
```

:::warning
The email you set up will be visible to the world. GitHub provides a secret email address in your account section. Use that!
:::

### 2. Update the `origin` of the repository to the right username

```
git remote set-url origin git@github.com-YOUR_BOBABOARD_GITHUB_USERNAME_HERE:YOUR_REMOTE_URL_HERE
```
