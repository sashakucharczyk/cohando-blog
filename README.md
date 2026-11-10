# cohando-blog

The devlog for [Cohando](https://cohando.com), served at `cohando.com/blog`.

Markdown posts in `posts/`, one file per post, named `YYYY-MM-DD-slug.md`.
A tiny dependency-free Node build script (`build.mjs`) renders them to plain
HTML in `dist/` using `template.html` and `style.css`.

## Before a post is a post

- `ideas/` — pitches and campaign ideas being considered.
- `drafts/` — working packages being prepared and reviewed. Nothing in
  `ideas/` or `drafts/` is built or deployed; only `posts/` ships.

## Build

    node build.mjs

No dependencies, no install step. Output lands in `dist/`.

## Deploy

Deployed to `cohando.com/blog` from tagged commits. A deploy is a checkout of
a tag, `node build.mjs`, and a copy of `dist/` to the blog directory on the
server (see DEPLOY.md for the exact paths).
