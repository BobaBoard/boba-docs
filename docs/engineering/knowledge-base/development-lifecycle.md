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

## 0. Create a fork

If you haven't been explicitly added to the repository you're contributing to, you will need to create a "fork" you own and upload the changes there before opening a pull request (aka "please, BobaLord, merge my code into the official BobaBoard codebase", see [Git Notes](/docs/engineering/legacy-pages/git-notes) ). Unless you know what you're doing and have forked before running `git clone`, follow these instructions to change your `clone` into `fork`.

1. Go to the **github website** (you must be logged in) and click on the fork button at the top-right corner of the repository you want.

   ![The fork button is located on the top right of the page.](/img/legacy/devenv1.png)

2. Take note of the new git address of your forked repository. It should be something like `https://github.com/YOUR-USERNAME/BOBABOARD-REPO.git`. You can find it on the main page of your new forked repo, under code.

   ![The URL of our new repo is under the "Code" dropdown on your repo's main page.](/img/legacy/devenv2.png)

3. Run the following commands from your terminal, in the root folder of the repo that you want to upload.

```bash
git config --get remote.origin.url | xargs git remote add upstream
git remote set-url origin [YOUR NEW REMOTE URL HERE]
git fetch
```

At this point, you can proceed with the regular flow for a pull request.

## 1. Create a branch off of `master` for your new feature

In the folder for your **forked** repository (see step 0) run

```bash
git branch -f new-feature-name
git checkout new-feature-name
```

Of course you can swap `new-feature-name` with whatever string represents what you're trying to do.

**TIP:** if you want to work on multiple changes at the same time, you can maintain different branches with separate code (see [Git Notes](/docs/engineering/legacy-pages/git-notes)). Just run the code above to create another branch, and you can then switch between branches using `git checkout my-branch`. Code changes aren't shared between branches.

## 2. Write code

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

## 3. Create a pull request on Github

Once you're done, it's time to open a pull request (again, also known as "please, BobaLord, merge my code into the official BobaBoard codebase"). To do so:

1. Go to your **forked repo** on the **github** website
2. You should see a message like the one in yellow here. Click on Compare & pull request.

   ![An image of the Pull Request button on the main repo page.](/img/legacy/devenv3.png)

3. Write a description and click on "create pull request". Try to explain what you did and why as if the person reading it had zero context for it and was eager to go back to reading hot fanfictions. That is, try to be precise but concise.

## 4. Submit for review

There will be a bit of back and forth, and you might get comments requesting to change some of your code or asking clarifying questions. This is normal and expected: no engineer, no matter how senior, never gets comments and questions on their code. It's just part of the job, and not a reflection of your skills.

Most often, code reviews are just a matter of the maintainer enforcing consistency in the codebase, or spotting bugs you might have missed (like we all do), or asking to make code clearer for someone that has never read it before. Always feel free to ask clarifying questions, or to push back if you disagree with something.

Once your pull request is merged (aka accepted in the main codebase), you can delete your branch. Github has a easy button for you to do so.

### How to Make Requested Changes

When changes are requested, you will likely see comments on the pull request you have submitted. Simply go back to step 2, write code, commit and push until all comments are fixed. Then go back to the pull request, check that everything is in order, and ask for an additional review. You should mark the comments you have addressed as done by using the "resolve convo" button.

## 5. Pulling from upstream

When you go back to the codebase, it's likely that more changes will have been made on the original BobaBoard codebase your code is forked from. To update your git fork to reflect the changes of "upstream" (aka the original codebase) run the following command.

```bash
git pull upstream master
```

You can now go back to step 1 and make new changes all over again.
