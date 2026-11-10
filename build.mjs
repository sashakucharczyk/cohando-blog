// cohando-blog build: markdown posts in posts/ -> static HTML in dist/
// No dependencies. Run: node build.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(s) {
  return esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+|\/[^)\s]+)\)/g, '<a href="$2">$1</a>');
}

// Minimal markdown: # / ## / ### headings, paragraphs, - and 1. lists,
// > quotes, fenced code blocks. Everything else becomes a paragraph.
function md(src) {
  const lines = src.split('\n');
  const out = [];
  let i = 0, list = null, quote = null;
  const closeLists = () => {
    if (list) { out.push(`</${list}>`); list = null; }
    if (quote) { out.push('</blockquote>'); quote = null; }
  };
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('```')) {
      closeLists();
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)/);
    if (h) { closeLists(); out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); i++; continue; }
    if (/^>\s?/.test(line)) {
      if (!quote) { closeLists(); out.push('<blockquote>'); quote = true; }
      out.push(`<p>${inline(line.replace(/^>\s?/, ''))}</p>`); i++; continue;
    }
    const li = line.match(/^\s*[-*]\s+(.*)/) || line.match(/^\s*\d+\.\s+(.*)/);
    if (li) {
      const tag = /^\s*\d/.test(line) ? 'ol' : 'ul';
      if (list !== tag) { closeLists(); out.push(`<${tag}>`); list = tag; }
      out.push(`<li>${inline(li[1])}</li>`); i++; continue;
    }
    if (line.trim() === '') { closeLists(); i++; continue; }
    closeLists();
    out.push(`<p>${inline(line)}</p>`); i++;
  }
  closeLists();
  return out.join('\n');
}

const template = readFileSync('template.html', 'utf8');
mkdirSync('dist', { recursive: true });
copyFileSync('style.css', 'dist/style.css');

const posts = [];
for (const f of readdirSync('posts').filter((f) => f.endsWith('.md'))) {
  const m = f.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
  if (!m) { console.error(`skipping ${f}: expected YYYY-MM-DD-slug.md`); continue; }
  const [, date, slug] = m;
  const src = readFileSync(join('posts', f), 'utf8');
  const title = (src.match(/^#\s+(.*)/m) || [null, slug])[1].trim();
  const body = md(src);
  const html = template
    .replace('{{TITLE}}', esc(title))
    .replace('{{BODY}}', `${body}\n<p class="date">Posted ${date}</p>`);
  mkdirSync(join('dist', slug), { recursive: true });
  writeFileSync(join('dist', slug, 'index.html'), html);
  posts.push({ date, slug, title });
}

posts.sort((a, b) => b.date.localeCompare(a.date));
const items = posts
  .map((p) => `    <li><time>${p.date}</time><a href="/blog/${p.slug}/">${esc(p.title)}</a></li>`)
  .join('\n');
const index = template
  .replace('{{TITLE}}', 'Devlog')
  .replace('{{BODY}}', `<h1>Devlog</h1>\n<ul class="post-list">\n${items}\n</ul>`);
writeFileSync('dist/index.html', index);
console.log(`built ${posts.length} post(s) -> dist/`);
