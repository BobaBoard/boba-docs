# Editing BobaDocs Appendix

Additional how-tos that don't fit in the main guide.

## Adding new files

When navigating your repo, did you ever notice that there was an "Add file" dropdown? Clicking it will let you add a new file **to the folder you're currently in** with one of two ways: by creating one within the GitHub editor, or by uploading one. Once you've selected an option, the process works the same as making edits to and committing an already-existing file.

BobaDocs generates sidebars automatically based on the filename of the pages in it: **so make sure you title your filename with the title you want it to have on the site**. Much like git branches, the format it uses is `words-separated-by-dashes.md`. Using that as a filename would give you a page listed as `Words Separated By Dashes` in the sidebar. Don't forget the `.md`, so Docusaurus recognizes the filetype!

An aside: if any readers are interested in looking at Docusaurus and writing out explanations, information on [how to arrange the sidebar](https://docusaurus.io/docs/sidebar) and [how to title pages](https://docusaurus.io/docs/docs-introduction/) would be excellent additions to this guide.

## Adding images

Remember the `static` folder in the repo from earlier? You add images to your page by uploading the images there (specifically within the `img` folder), then linking to them within the page. Markdown's syntax for adding images is as follows:

```
![ALT TEXT](FILEPATH)
```

Docusaurus processes the filepath given in that syntax such that it's relative to the `static` folder. Images go in the `img` folder within the `static` folder, so many images on the site are linked to with:

```
![ALTTEXT](/img/[FILENAME])
```

If you have a folder within the `img` folder that your images are in, you'll have to change the filepath accordingly. An example of this are the images on this page: they're all in a folder named `volunteer` within the `img` folder. Accordingly, the images on this page are linked to with:

```
![ALTTEXT](/img/volunteer/[FILENAME])
```

## Keeping your repo updated

As more and more people edit BobaDocs, the main repo will be updated, including changes that your repo doesn't have. Not to worry! GitHub will prompt you when this occurs. All you need to to is click the "Fetch upstream" dropdown on your main repo page, click "Fetch and merge", and GitHub will do the rest.

## Looking at the things you made after submitting a pull request

Did you know that after submitting a pull request, you can check your changes in a built version of the site? On the page of your pull request, scroll down until you see the checks, and click the link shown below.

![screenshot of the pull request, with an arrow pointing to the details link of "Deploy preview ready!"](/img/volunteer/bobadocsdeploypreview.jpg)

A version of BobaDocs including the changes you made will open. You can poke around, admire your work, and if you're quick, maybe catch a bug and fix it with none the wiser.

## "I do not want to delete my branch." OR "I am reusing / would like to reuse the same branch."

This is a really good way to make things a confusing mess.

To be fair, *there are situations where this might make sense:* if all you do is fix typos, for example. It's tiny work done over and over again over a long period of time. It might make sense to keep it all in the same branch. The problems come from doing all your work in the same spot, and from never cleaning up.

1. **Doing all your work in one branch:** The benefit of git branches is that you can have multiple works in progress for your repo without them affecting each other. Accidentally break one, and you can still continue work in the other branches because the break is isolated. This benefit goes away if you do all your work in one spot.
    - Incidentally, this is why you don't work in main. All branches pull from and update to match main, so if you break main, then the rest of your branches are automatically broken until you can fix it.
    - It also lets you select what changes you want to submit. If you have two projects in the same branch and finish one, submitting a pull request with the branch submits both complete AND incomplete work, because the pull request submits everything. You select what it is you want to submit at the same time by grouping it together in a branch.

2. **Never deleting branches:** git doesn't care if you do this, but any humans reading your stuff do. It fills your tree with clutter and makes it harder to pick out relevant information.
    - You can actually recreate deleted branches by singling out a commit and branching from it. Deleting a branch once the work assigned to it is done is reversible, not a big deal, and goes a long way toward keeping things well organized.

It's not that you *can't* do it, it's just a bad idea.