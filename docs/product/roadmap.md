---
sidebar_position: 1.1
---

# Roadmap

**Last Updated:** 9/18/2021

## Where we are

- Alpha community chugging along for 1+ years!
  - Incidents have been rare, and resolved succesfully.
  - Maintainance has been very hands-free (yet here we are).
- Realms have been announced (see [website](https://www.bobaboard.com)).
- Our [support channels](https://www.bobaboard.com/support-us) are bringing in some $$$ (or, more accurately, $).
- We have a skeleton of a documentation website and a (very early) volunteering processes.
  - While they've been sporadic, we've also had significant contributions made by volunteers.

## Where we're going

:::info Ms. Boba's Status
Ms. Boba is currently the only full-time staff member! However, [personal issues](https://www.bobaboard.com/blog/development-logs-7/) have forced her to reframe how she approaches the project. Given the unstable situation, we're setting aside speed of development and growth in the short term, and focusing on strengthening the long-term maintainability and sustainability of the project (especially in the case of unforeseen circumstances).
:::

### Current Focus Areas

- **[P0]:** Volunteer processes
  - **Answering the Q:** What makes for a _great_ volunteering environment?
  - **Current WIPs:**
    - Well-defined positions and expectations.
    - This documentation.
      - Note: documentation includes _both_ code and processes.
    - Standardization of code practices (including cleaning up our REST API).
- **[P0]:** Realms
  - **Preliminary Phase (now)**:
    - Update BobaBoard's REST API (and DB schema) to support multiple communities coexisting on the same instance (Galaxy).
  - **Building Phase (soon)**:
    - Add administration features needed for admins without access to underlying DB.
      - TODO: define features needed -> figure out open UX questions -> figure out base components to build out -> figure out new REST API endpoints -> figure out frontend changes -> parallelize building/solving these as much as possible -> ??? -> profit.
    - Figure out recruitement strategy/selection process.
      - What do we want to learn?
      - Which guarantees do we offer in terms of availability/reliability/ability to help solve conflicts or issues?
        - Share detailed product roadmaps with stakeholders to help make informed choice.
      - What is our responsibility? What is the Realm's admin responsibility?
        - This phase of growth must really stress the _allies_ part of the whole deal.
  - **Explorative Phase (god, i wish i knew)**:
    - Discoverability
    - "Feeds"
    - Cross-realms identity management

### Current "As We See Fit" Areas

- **[P1]:** Performance
  - "Quick" win areas: splitting JS bundle, client-side caching, image CDN (including appropriate sizing and availability in "smaller" formats), React Concurrent Mode (when available)
    - Note: these are quick wins in the sense that they're likely to have a disproportionate impact on performance. They're not necessarily quick to implement.
- **[P1]:** Error Reporting, Management and Avoidance
  - We did add observability instrumentation, though it's currently limited to the backend.
  - _Testing testing testing_
    - Backend testing is the most mature of the bunch (includes integration with CircleCI)
    - We _really_ need to work on frontend testing
      - Adding tests is a good entry point for code volunteering, as it should be fairly easy to look at what other tests are doing and copy it, even without in-depth JavaScript proficiency.
- **[P1]:** Code clean up and modularization
  - Create self-contained, well-standardized entry points for contributions
    - Example: adding new types of permissions, adding new options on post/comments dropdowns, adding new features to the editor, adding more cosmetic customization on boards/realms/etc.
    - Expansion of these features should be possible with only a superficial understanding of the codebase. Assume most volunteers will want to build a quick feature and "go on their way".
      - Hypothesis: people are more likely to stick around for larger projects if they can get a "quick win" under their belt first.

## More

For the latest news on product roadmap/happenings, you can check the ["Keeping Up with Ms.Boba"](https://essentialrandomness.com/posts/tag/keeping-up-with-ms-boba/) tag on the insider newsletter.

For questions, insights and objections, contact Ms. Boba.

:::note
TODO[Ms.Boba]: I really should have a "contact me" page.
:::
