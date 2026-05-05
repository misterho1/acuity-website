#!/usr/bin/env node
/**
 * Acuity website build — vanilla Node, no deps.
 * Walks src/pages/, resolves <!-- #include "name" --> against src/partials/,
 * substitutes {{var}} from per-page <!--meta...-->meta frontmatter,
 * writes to dist/. Copies src/styles, src/scripts, src/assets verbatim.
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SRC_PAGES = path.join(ROOT, "src", "pages");
const SRC_PARTIALS = path.join(ROOT, "src", "partials");
const SRC_STYLES = path.join(ROOT, "src", "styles");
const SRC_SCRIPTS = path.join(ROOT, "src", "scripts");
const SRC_ASSETS = path.join(ROOT, "src", "assets");
const DIST = path.join(ROOT, "dist");

function rmrf(p) {
  if (!fs.existsSync(p)) return;
  for (const f of fs.readdirSync(p)) {
    const full = path.join(p, f);
    if (fs.statSync(full).isDirectory()) rmrf(full);
    else fs.unlinkSync(full);
  }
  fs.rmdirSync(p);
}

function loadPartials() {
  const out = {};
  if (!fs.existsSync(SRC_PARTIALS)) return out;
  for (const f of fs.readdirSync(SRC_PARTIALS)) {
    if (f.endsWith(".html")) {
      out[f.replace(/\.html$/, "")] = fs.readFileSync(path.join(SRC_PARTIALS, f), "utf8");
    }
  }
  return out;
}

function extractMeta(html) {
  const meta = {};
  const m = html.match(/<!--meta\s*([\s\S]*?)-->/);
  if (!m) return { meta, html };
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^\s*([\w-]+)\s*:\s*(.*?)\s*$/);
    if (kv) meta[kv[1]] = kv[2];
  }
  return { meta, html: html.replace(m[0], "").trimStart() };
}

function processIncludes(html, partials) {
  let prev;
  do {
    prev = html;
    html = html.replace(/<!--\s*#include\s+"([^"]+)"\s*-->/g, (_, name) => {
      if (!(name in partials)) {
        console.warn(`! missing partial: ${name}`);
        return "";
      }
      return partials[name];
    });
  } while (html !== prev);
  return html;
}

function processVars(html, vars) {
  return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, name) => (name in vars ? vars[name] : ""));
}

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src)) {
    const s = path.join(src, f);
    const d = path.join(dst, f);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function walk(dir, cb) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, cb);
    else cb(full);
  }
}

function build() {
  rmrf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  const partials = loadPartials();
  let count = 0;

  walk(SRC_PAGES, (file) => {
    const rel = path.relative(SRC_PAGES, file);
    const out = path.join(DIST, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });

    if (file.endsWith(".html")) {
      const raw = fs.readFileSync(file, "utf8");
      const { meta, html } = extractMeta(raw);
      meta.canonical = meta.canonical || ("https://expectacuity.com/" + rel.replace(/index\.html$/, "").replace(/\\/g, "/"));
      let processed = processIncludes(html, partials);
      processed = processVars(processed, meta);
      fs.writeFileSync(out, processed);
      count++;
    } else {
      fs.copyFileSync(file, out);
    }
  });

  copyDir(SRC_STYLES, path.join(DIST, "styles"));
  copyDir(SRC_SCRIPTS, path.join(DIST, "scripts"));
  copyDir(SRC_ASSETS, path.join(DIST, "assets"));

  console.log(`✓ built ${count} HTML pages → ${DIST}`);
}

build();
