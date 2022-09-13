---
sidebar_position: 8
---

# Git Notes

Here are some notes on git concepts that might be useful to newcomers.

### On Commits

A commit is like "saving a checkpoint" of your code. Assume you divide your work in various steps, like:
1) Create tables in the DB
2) Write queries to fetch from the DB
3) Write logic that returns data on request using the queries created in 2
It would be a good practice to create a commit after each step (or with even more granularly). What that does is that if in the middle of step 3 you find yourself wanting to start over, you can discard everything you have done up to that point and go back to the previous commit (aka checkpoint). Without a commit, you would have to detangle the code you created on step 2 from the code you wrote for step 3, which might be an extremely terrible endeavor.

### On Pull Requests

A "pull request" is basically saying: here's a bunch of my commits, which add this functionality. I made them on a separate branch or on a fork of your code because that's good practice. I swear, they're good. Can you check them out, approve them, and then "merge" them with your original code so they're available to everyone, pretty please?

### On Branches

Git branches allow you to work on code in isolation. Basically, every branch exists (to simplify) independently of each other. Master (which github is renaming main cause [long story]) is usually the "official" branch. Feature changes are made on other branches, and only when they work and are verified, they're effectively merged with master. This means that you can work in parallel on more changes without your half finished code getting all tangled. I haven't always been the greatest about making branches (cause whatever, I was working alone), but it's really good practice.

You can create a branch with `git branch -f name-of-branch` and checkout a branch with `git checkout name-of-branch`. To pull (download) a branch from the remote (a.k.a. the code on github) that you don't have on your local machine, you can run `git pull origin name-of-branch`. This allows you to pick up from someone else's branch.