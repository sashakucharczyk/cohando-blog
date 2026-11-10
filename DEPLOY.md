# Deploying the blog

Target: `https://cohando.com/blog` - static files in
`/home/kucharcz/collaboration-mvp/public/blog/` on the cPanel host
(Hawk Host, nyc007).

## Why this works without touching the app

`cohando.com`'s docroot is the Laravel app's `public/` directory. Its
`.htaccess` sends only non-existent paths to `index.php`
(`RewriteCond %{REQUEST_FILENAME} !-d` / `!-f`), so an existing `blog/`
directory full of static files is served by Apache directly. No app file
is modified and no rewrite rule changes.

## One-time server setup (cPanel)

1. cPanel > Git Version Control > Create: clone this repo to
   `/home/kucharcz/repositories/cohando-blog`.
   The repo is public, so cPanel clones it over HTTPS; no deploy key
   needed.
2. This repo's `.cpanel.yml` copies `dist/` into the docroot on every
   deploy.

## Deploying a change

1. In a checkout: `node build.mjs`
2. Commit everything including `dist/`, tag (e.g. `v0.1.1`), push.
3. cPanel > Git Version Control > Manage > Pull or Deploy: check out the
   tag, then Deploy HEAD Commit.

Deploys are manual clicks in cPanel (no webhook: adding one needs repo
admin). An agent can do them through the saved cPanel session.

## Notes

- Node is NOT required on the server: build output (`dist/`) is committed
  at tag time.
- `cp -R` overwrites but never deletes. If a post is renamed or removed,
  delete its old slug directory under `public/blog/` in File Manager.
- The blog lives inside the app docroot. If an app deploy ever wipes
  `public/`, redeploy from cPanel Git to restore the blog.
- Linking to `/blog` from the Cohando landing page is an app change and
  goes through the app's own PR flow, not this repo.
