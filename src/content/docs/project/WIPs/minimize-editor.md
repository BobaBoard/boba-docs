---
title: Minimize Editor
sidebar:
  order: 1
---

[GitHub Issue](https://github.com/BobaBoard/issues/issues/51)

## Summary

The only way to exit the "new thread/contrib/comment" modal is to either post or
delete what's being typed. We want to start a draft, be able to temporarily
minimize the editor, move around the thread, then pick things back up from where
we left.

### Use Cases

- Re-read what you were replying to as you're composing your thoughts
- Copy/paste quotes from around the thread into your reply

### Open Questions

1. **How do we visually indicate to the user that there's a draft in progress?**
2. **How do we visually indicate what the current draft is replying to (or where
   it will fit in the thread)?** What happens if the user changes thread display
   format? What if e.g. the contribution they're replying to is filtered out
   with the sidebar filters?
   - If we give the user the ability to easily "go back to what your current
     draft is replying to", which seems reasonable, how do we account for the
     above cases?
3. **Do we want to be able to move outside the thread?**
   - From a technical standpoint, I don't foresee this being significantly more
     difficult than the regular case.
   - From a UX standpoint, I imagine it would create a lot more edge cases.
     Experimenting with the single-thread case first would be the best course of
     action IMO.
   - **Potential use cases:** pulling quotes/content from other threads/boards
     into your current contribution.
4. **What happens if the user tries to reply to something else while ?** Can you
   move what you've typed to a different contrib/comment?
5. **Are there things we want to build in the future that might conflict with
   this features?** Off the top of my mind, no. Actually, it will be a great way
   to make the "quote comment in contribution" flow work better once we have it.

### What's Already Implemented

- There already is an unused "minimize" button in contributions
  ([link](https://bobaboard-ui.netlify.app/?path=/story/post-editor--editable-with-footer)),
  but we aren't "married" to the design.

### Prior Art

The only social netwrok software I can think of with a similar function is
Discourse.

- They allow you to minimize the editor and navigate anywhere in their software
  (AFAICT).
- They do not have any special indicator on the post that is being replied to,
  but have a link to it on top of their editor. Clicking the link will load that
  post/thread.
  - For posts without a title, it just marks the name of the person you're
    replying to. If they feature more than once in a thread, there's no specific
    distinction in that case.
- Clicking on another reply button will immediately mark your current draft as
  replying to the new post.
- Selecting text on any post brings up a "quote" callout, which will copy the
  text into your editor when clicked.

![Discourse Interface](https://blog.discourse.org/assets/2016/04/discourse-mobile-editor-v15.png)
