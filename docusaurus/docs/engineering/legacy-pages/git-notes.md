---
sidebar_position: 8
---

# Git Notes

Here are some notes on git concepts that might be useful to newcomers.

## On Commits

A commit is like "saving a checkpoint" of your code. Assume you divide your work in various steps, like:

1) Create tables in the DB
2) Write queries to fetch from the DB
3) Write logic that returns data on request using the queries created in 2

It would be a good practice to create a commit after each step (or with even more granularly). What that does is that if in the middle of step 3 you find yourself wanting to start over, you can discard everything you have done up to that point and go back to the previous commit (aka checkpoint). Without a commit, you would have to detangle the code you created on step 2 from the code you wrote for step 3, which might be an extremely terrible endeavor.

## On Pull Requests

A "pull request" is basically saying: here's a bunch of my commits, which add this functionality. I made them on a separate branch or on a fork of your code because that's good practice. I swear, they're good. Can you check them out, approve them, and then "merge" them with your original code so they're available to everyone, pretty please?

## On Branches

Git branches allow you to work on code in isolation. Basically, every branch exists (to simplify) independently of each other. Master (which github is renaming main cause [long story]) is usually the "official" branch. Feature changes are made on other branches, and only when they work and are verified, they're effectively merged with master. This means that you can work in parallel on more changes without your half finished code getting all tangled. I haven't always been the greatest about making branches (cause whatever, I was working alone), but it's really good practice.

You can create a branch with `git branch -f name-of-branch` and checkout a branch with `git checkout name-of-branch`. To pull (download) a branch from the remote (a.k.a. the code on github) that you don't have on your local machine, you can run `git pull origin name-of-branch`. This allows you to pick up from someone else's branch.

----

## Even more terminology

You don't need to know all of these terms by heart. Trust us when we say that as you get involved you will naturally start grasping these ideas over time. This is simply here as reference.

### repository

In a coding context, a repository (sometimes shortened to "repo") is a fancy term for the folder where a project's code is stored.

### local/remote

Your own computer is often called your local machine or ~environment~. Things that exist in your computer will be referred to as such, for example: a repository that lives in your computer is a local repository.

Anything that lives elsewhere is said to be remote. For example, a repository of code hosted on GitHub (either on your own account or someone else's) is a remote repository.

### origin/upstream

When you clone a repository, git automatically stores the address of the repository you cloned from. The default name used to refer to this remote repository is `origin`.

The `upstream` remote repository is one you'll have to point to explicitly once you start coding locally - it isn't configured by default like `origin`. What exactly is `upstream`? Well, that is the convention for what we call the repository you forked from originally. Having a reference to that repository will be needed to download any changes other collaborators have added since you first forked the repo.

```bash
$ git remote -v
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
> upstream  https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
```

In practical terms, when you contribute code to a BobaBoard repository, the repo that belongs to the BobaBoard account is the `upstream`, the fork that lives on your own GitHub account is the `origin` and the clone of *that* living in your PC is your `local`.****

> [!question]- Uhm. What's the point of all this?
> Glad you asked! The point of **forking** a repository is being able to push (meaning upload) changes in isolation until you're ready to actually request the original project's owner to review your edits. You'll also most often find that you don't have permission to directly make changes to other people's repos anyway, so editing your own fork is the way to go.
>
> The point of **cloning** is being able to work on things on your own machine, in your own code editor. There's some edits that are easy to do from GitHub's web interface, especially for markdown files like README's or the boba-docs documentation files - but for the most part you'll want to have a copy in your own system to play with.

### branch

When you create a branch in your git repository you can safely make edits without affecting your `main` branch, or any other branches you choose to create. It's essentially a way to make multiple parallel edits to code in an orderly way. 

For example, you may want to create a branch named `typos` to fix small text mistakes. Then, another branch named `css-edits` to work on improving the styling of a component that is failing accesibility checks, and yet another branch named `new-component` to add a new piece to the UI.

If you were to make all those changes in the same branch then:

- the small typo edits you've made won't be approved until the bigger edits are (bigger changes mean more code reviews might be needed)
- it will be more likely for conflicts with `upstream` to show up (the more different things you edit, the more likely you'll be editing the same file as someone else)
- it will be harder to troubleshoot issues, since it will be hard to keep track of what files you've changed and how they interact with each other

It's not the end of the world if you forget to make a new branch but it's worth trying to get into the habit because it will make things easier in the long run!

### main/master

Both of these terms refer to the default branch in a repository. `master` used to be the default most projects used (and is still the default the git software uses), but GitHub, BobaBoard and many others have switched to using `main` as a default instead[^1].

[^1]: If you'd like, you can read about [the initiative that lead to this change](https://sfconservancy.org/news/2020/jun/23/gitbranchname/).
