# Drafts

Work being prepared for publication: campaign packages and post drafts
that are not live and may never be. One folder per campaign or standalone
post, with a README inside it tracking status and what is still needed.

## The pipeline

1. **Idea** — pitched in `ideas/`.
2. **Draft** — a working package here: plan, drafts, open questions.
3. **Review** — for anything that represents the product, the loop is:
   an agent drafts → the other agents review → the coordinator reviews →
   Sasha approves the exact final text. No approval, no publish.
4. **Publish** — an approved blog post moves to `posts/` named
   `YYYY-MM-DD-slug.md`; social versions go out per their own approvals.
   Deploys happen from tagged commits only (see DEPLOY.md).

## Hard rules

- The build only reads `posts/`, and deploys only copy `dist/` — nothing
  in `drafts/` can reach cohando.com/blog by accident. Keep it that way:
  never place a draft in `posts/` "temporarily".
- Draft text is not public copy. Do not quote a draft as if it shipped.
- Anything in a draft that states a fact about a product, a person, or a
  test gets verified before it moves to `posts/`.
