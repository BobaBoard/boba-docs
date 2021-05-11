# Editing BobaDocs

Did you know that you can edit BobaDocs - the website that you're looking at *right now* - without ever having to touch a command line? This guide will walk you through it.

**You will need a GitHub account to do this.**

## Step 0: Setting up your git fork & branch

### Forking

The files that this website runs off of (known collectively as the site's `repo`) are only allowed to be edited by the BobaLord: this prevents random people from showing up and screwing up the site. This also means that in order to make any changes, you'll need your own copy of the files, known as a `fork`.

First, **make sure you're logged in to GitHub.** Once you're logged in, navigate to the main repo for the site at [https://github.com/essential-randomness/bobadocs](https://github.com/essential-randomness/bobadocs). You can also get there by clicking the "GitHub" link on the top right corner of the site.

Once there, on the top right corner of the GitHub page, you should see a `Fork` button. Click it. You will be automatically redirected to your fork.

![a cropped screenshot of the bobadocs github page, with a red arrow pointing to the fork button](/img/volunteer/bobadocsfork.jpg)

### Branching

**If you already have a branch set up that you'd like to work in, then skip this section.**

In git, a `branch` is a separate version of a repo that can be edited without affecting the main repo. It lets developers separate what they're working on, so problems that arise when working on one issue don't affect any other work that may be being done concurrently. Making good use of branches is key to keeping a project history easy to understand. It also keeps multiple people working on the same project from stepping on each other's toes.

To create a new branch, click the dropdown labelled "main" on the left side of the screen, enter a short, descriptive name for your repo in the textbox, and click "Create branch".

![a cropped screenshot of the bobadocs github page, with red arrows pointing to relevant spots on the branch dropdown](/img/volunteer/bobadocsbranch.jpg)

## Step 1: Navigating to GitHub's editor

### Method 1: Navigate from within your GitHub repo

If you look at your repo, you'll notice that it looks a lot like a filesystem. That's because it is a filesystem! And you can navigate to the different files in it - that is, the *pages in the site* - by clicking through it.

To do that, we need to know a little bit about how Docusaurus is laid out. Docusaurus separates site content into four folders:

- `blog`: containing blogposts (this is unused by BobaDocs at this time)
- `docs`: containing the pages on the site **(this is the one we want!)**
- `src`: containing information on how to build the site, including styling
- `static`: containing static site data, such as images

We want to edit a page in the site, so click `docs`.

![a screenshot of the git repo, with a red arrow pointing to the docs folder](/img/volunteer/bobadocsnav1.jpg)

You'll notice four new folders: `engineering`, `product`, `users`, and `volunteer`. Each of these folders corresponds to one of the guides on BobaDocs. Click the folder for the guide with the page you want to edit.

Once there, you'll notice something a little odd:

![a screenshot of the git repo compared to the sidebar on BobaDocs. lines are drawn between items with similar names](/img/volunteer/bobadocsnav2.jpg)

Some of the names of these things are QUITE SIMILAR. This isn't a coincidence! Docusaurus generates the sidebar for BobaDocs based on the files and folders present: each file is a page on the site, while each folder is a section on the sidebar.

Armed with this information (and a little investigation), I determine that the page I want to edit, Codebase Overview, is named `intro.md` in the repo. I click it.

![a screenshot of intro.md previewed on github. the edit button is highlighted](/img/volunteer/bobadocsnav3.jpg)

Doing so has led me to an overview of Codebase Overview. Near the top right of the file preview is a button shaped like a pencil. Hovering over it will give you its details: "Edit this file". Click it, and you'll be brought to GitHub's built-in editor.

### Method 2: Go directly from the page you want to edit

At the bottom of every page of documentation is a green link labeled "Edit this page". Click it, and you'll get a 404 error, courtesy of those editing permissions mentioned earlier. Luckily, there's more here than you may think. Look at the URL:

```
https://github.com/essential-randomness/bobaboard/edit/main/website/docs/engineering/intro.md
```

I got this URL by clicking the link at the bottom of the [Engineering Guide's Codebase Overview page](../engineering/intro). This URL follows a logical format, which can be described as such:

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

## Step 2: Make your edits

GitHub's built-in editor doesn't have much in the way of bells and whistles, but it's straightforward and gets the job done. The main thing you need to know is markdown.

**Markdown** is a widely used system for formatting text. If you've typed asterisks into Discord to italicize something, you've used markdown. Docusaurus also uses markdown files (those files with the `.md` at the end) to generate its pages.

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

Once you're satisfied with your changes, it's time to `commit` them. Scroll down the page.

![a screenshot of github's commit form. red arrows are pointing at the input textboxes and submit button](/img/volunteer/bobadocscommit.jpg)

Title your commit, and give it a description of the changes you made. Once you're satisfied with that, click the button to commit the changes. After commiting your changes, click back to the main page of your repo.

![a screenshot of github's repo page, with a red arrow pointing to the pull request button](/img/volunteer/bobadocsaftercommit.jpg)

You'll notice that GitHub has noticed that you made changes. Once you've made all the changes you want to make to all the files you want to make them to, it's time to submit those changes to the BobaLord for review.

## Step 3: Submit a pull request

GitHub lets users move updates between forks through a `pull request`. It's a "request" that the other person "pull" the changes from your repo into their repo. Clicking the "Compare & pull request" button on your repo will send you to the page where you do this.

![github's pull request page. red arrows are pointing to the branch selection, details textboxes, and submit button](/img/volunteer/bobadocspullrequest.jpg)

There are a few things to do here:

1. At the top of the form is some dropdowns for selecting which branches to use for the pull request. They  should be filled in automatically, but double-check that they're correct.

2. Give your 

## Step 4: Cleanup

# Appendix

Additional how-tos that don't fit in the main guide.

## Adding new files

When navigating your repo, did you ever notice that there was an "Add file" dropdown? Clicking it will let you add a new file **to the folder you're currently in** with one of two ways: by creating one within the GitHub editor, or by uploading one. Once you've selected an option, the process works the same as making edits to and committing an already-existing file.

BobaDocs generates sidebars automatically based on the filename of the pages in it: **so make sure you title your filename with the title you want it to have on the site**. Much like git branches, the format it uses is `words-separated-by-dashes.md`. Using that as a filename would give you a page listed as `Words Separated By Dashes` in the sidebar. Don't forget the `.md`, so Docusaurus recognizes the filetype!

An aside: if any readers are interested in looking at Docusaurus and writing out explanations, information on [how to arrange the sidebar](https://docusaurus.io/docs/sidebar) and [how to title pages](https://docusaurus.io/docs/docs-introduction/) would be excellent additions to this guide.

## Adding images

Remember the `static` folder in the repo from earlier? You add images to your page by uploading the images there, then linking to them within the page.

## Keeping your repo updated

As more and more people edit BobaDocs, the main repo will be updated, including changes that your repo doesn't have. Not to worry! GitHub will prompt you when this occurs. All you need to to is click the "Fetch upstream" dropdown on your main repo page, click "Fetch and merge", and GitHub will do the rest.
