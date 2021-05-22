---
sidebar_position: 1
---

# Editing BobaDocs

This guide will show you how to edit BobaDocs, the website that you're looking at *right now.*

You will need:
- A [GitHub](https://github.com) account. (A brief explanation of GitHub is available in our [Knowledge Base](/docs/engineering/knowledge-base/#github). Any `git terminology` use in this guide is also explained there.)

You will NOT need:
- Any knowledge of command lines.

## Step 0: Create your own copy of BobaDocs

Only the BobaLord is allowed to modify the original copy of BobaDocs. To make changes, you'll have to your own copy of the files. This process is called forking, and you can read more about it in our [knowledge base](/docs/engineering/knowledge-base/).

**If you already have a copy of BobaDocs, skip to [Keeping your files updated](#keeping-your-files-updated).**

First, **make sure you're logged in to GitHub.** Once you're logged in, navigate to the main repo for the site at [https://github.com/essential-randomness/bobadocs](https://github.com/essential-randomness/bobadocs). You can also get there by clicking the "GitHub" link on the top right corner of the site.

Once there, on the top right corner of the GitHub page, you should see a `Fork` button. Click it. You will be automatically redirected to your copy of the files.

![a cropped screenshot of the bobadocs github page, with a red arrow pointing to the fork button](/img/volunteer/bobadocsfork.jpg)

:::tip
By the way! To do this right, you'd also need to branch. Read our [knowledge base](/docs/engineering/knowledge-base/) to learn more about branching.
:::

### Keeping your files updated

As more and more people edit BobaDocs, the main repo will be updated, including changes that your repo doesn't have. Not to worry! GitHub will prompt you when this occurs. All you need to to is click the "Fetch upstream" dropdown on your main repo page, click "Fetch and merge", and GitHub will do the rest.

## Step 1: Find the right file to edit

To edit our file, we first need to find it. For this example, I'll edit the [Engineering Guide's Codebase Overview](/docs/engineering/intro).

### Method 1: Go directly from the page you want to edit

At the bottom of every page of documentation is a green link labeled "Edit this page". Click it, and you'll get a 404 error, courtesy of those editing permissions mentioned earlier. Luckily, there's more here than you may think. Look at the URL:

```
https://github.com/essential-randomness/bobaboard/edit/main/website/docs/engineering/intro.md
```

I got this URL by clicking the link at the bottom of the [Engineering Guide's Codebase Overview page](../../engineering/intro). This URL follows a logical format, which can be described as such:

```
https://github.com/[USERNAME]/[REPO NAME]/edit/[BRANCH NAME]/[PATH TO FILE]
```

That means that in order to get to the editing page, all we have to do is replace the values in the brackets with the values corresponding to our copy of the file. Here are the steps you need to do that:

1. Change `[USERNAME]` (default `essential-randomness`) to your GitHub username

2. Change `[REPO NAME]` (default `bobaboard`) to `bobadocs`

3. Change `[BRANCH NAME]` (default `main`) to the name of the branch you made earlier, with dashes replacing any spaces

4. Delete `website/` from `[PATH TO FILE]`

If I use my own information to make these changes, I get the URL:

```
https://github.com/rbot-github/bobadocs/edit/new-branch/docs/engineering/intro.md
```

Loading that URL, I now have GitHub's editor open, and can make my changes!

### Method 2: Navigate from within GitHub

**Understanding the repo structure

:::tip
This section explains everything you need to know to find the files you want, but a more complete explanation of Docusaurus' layout is available on our [Docusaurus Guide](/docs/engineering/docusaurus).
:::

If you look at your repo, you'll notice that it looks a lot like a filesystem. That's because it is a filesystem! And you can navigate to the different files in it - that is, the *pages in the site* - by clicking through it.

To get to the site pages, click `docs`.

![a screenshot of the git repo, with a red arrow pointing to the docs folder](/img/volunteer/bobadocsnav1.jpg)

You'll notice four new folders: `engineering`, `product`, `users`, and `volunteer`. Each of these folders corresponds to one of the guides on BobaDocs. Click the folder for the guide with the page you want to edit.

![a screenshot of the git repo compared to the top navbar on BobaDocs. lines are drawn between items with similar names](/img/volunteer/bobadocsnav4.jpg)

Once there, you'll notice that the names of files and folders are similar to the ones on the sidebar. This isn't a coincidence: Docusaurus generates navigation bars based on the files and folders. Each file is a page on the site, while each folder is a section on the sidebar.

![a screenshot of the git repo compared to the sidebar on BobaDocs. lines are drawn between items with similar names](/img/volunteer/bobadocsnav2.jpg)

Armed with this information (and a little investigation), I determine that the page I want to edit, Codebase Overview, is named `intro.md` in the repo. I click it.

![a screenshot of intro.md previewed on github. the edit button is highlighted](/img/volunteer/bobadocsnav3.jpg)

Doing so has led me to an overview of Codebase Overview. Near the top right of the file preview is a button shaped like a pencil. Hovering over it will give you its details: "Edit this file". Click it, and you'll be brought to GitHub's built-in editor.

## Step 2: Make your edits

To edit files in BobaDocs, you need to use Markdown. **Markdown** is a widely used system for formatting text. If you've typed asterisks into Discord to italicize something, you've used markdown.

[**Here is a cheat sheet guide to markdown syntax.**](https://www.markdownguide.org/cheat-sheet/) That site also includes more detailed information about the system. Please keep it, or any other guide, handy as a reference while you work.

We will now focus on things specific to GitHub's editor.

![a screenshot of github's editor with red arrows pointing to the preview and markdown guide buttons](/img/volunteer/bobadocseditor.jpg)

On the bottom right of the editor is a button with an M next to an arrow pointing down. This is short for "markdown", and clicking the button will direct you to [GitHub's Markdown Guide](https://guides.github.com/features/mastering-markdown/), another good reference.

On the top left of the editor is a "Preview" tab, which will let you look at your work before saving it.

![a screenshot of github's editor preview. a red arrow is pointing to the "show diff" button](/img/volunteer/bobadocspreview.jpg)

Use this tab often. Clicking the "Show diff" button on the top right of preview will highlight the changes you've made to the file, making it easy to see what you've done so far. Use show diff often.

:::tip
Notice how GitHub's preview doesn't look exactly the same as the page on Docusaurus? That's because Docusaurus makes use of tools that GitHub's editor doesn't, such as HTML or page metadata at the top of the file. If you're going to use these in GitHub's editor, take extra care and leave plenty of space between different elements to avoid errors.
:::

Once you're satisfied with your changes, it's time to save them. Scroll down the page.

![a screenshot of github's commit form. red arrows are pointing at the input textboxes and submit button](/img/volunteer/bobadocscommit.jpg)

Title your changes, and write a description for them. Once you're satisfied with that, click the "Commit" button to save the changes. After saving your changes, click back to the main page of your repo.

![a screenshot of github's repo page, with a red arrow pointing to the pull request button](/img/volunteer/bobadocsaftercommit.jpg)

You'll notice that GitHub has noticed that you made changes. Once you've made all the changes you want to make to all the files you want to make them to, it's time to submit those changes to the BobaLord for review.

## Step 3: Submit your changes

GitHub lets users submit changes to the main repo through a `pull request`. Clicking the "Compare & pull request" button on your repo will send you to the page where you do this.

![github's pull request page. red arrows are pointing to the branch selection, details textboxes, and submit button](/img/volunteer/bobadocspullrequest.jpg)

Here's how you submit:

1. At the top of the form are some dropdowns for selecting which copies of the files to use. They  should be filled in automatically.

2. Title your submission.

3. Describe the your changes in the larger textbox. We recommend at minimum a summary of what you did at the top, followed by a more detailed list. **In your description, please mention that you used this method (editing directly in GitHub, meaning that you did not use yarn to test run the site) before submitting. This will let us know to double check that everything works properly before accepting.**

4. Hit submit! Your changes are now sent!

## Step 4: Cleanup

Once your changes have been accepted by the BobaLord, there's still some housekeeping to do. When the work a branch was created for is done, then it's time to delete the branch. From the main page of your repo, click the branch dropdown, go all the way to the bottom, and click "View all branches".

![repo page with an arrow pointing to "View all branches" in the branches dropdown](/img/volunteer/bobadocsdelete1.jpg)

On the branches page, there's a list of your branches, along with buttons to edit them. One of these is a delete button. Click it.

![branches page with an arrow pointing to the delete button](/img/volunteer/bobadocsdelete2.jpg)

Just in case you've made a mistake, GitHub will give you a button to restore the branch. This button disappears once you leave the page.

Once your branch is deleted, you're all done. Congratulations! You've just edited BobaDocs!