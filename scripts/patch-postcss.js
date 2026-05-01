#!/usr/bin/env node
/**
 * Post-install script: replaces Next.js's internally-pinned postcss@8.4.31
 * with the top-level postcss (>=8.5.10) to address GHSA-qx2v-qp2m-jg93.
 *
 * Next.js pins postcss exactly in its own package.json, so npm overrides
 * cannot update the nested copy. This script copies the top-level patched
 * version into node_modules/next/node_modules/postcss after every install.
 */
const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '../node_modules/postcss')
const dest = path.resolve(__dirname, '../node_modules/next/node_modules/postcss')

if (!fs.existsSync(src)) {
  console.warn('[patch-postcss] top-level postcss not found, skipping patch')
  process.exit(0)
}

const srcVersion = JSON.parse(fs.readFileSync(path.join(src, 'package.json'), 'utf8')).version

if (fs.existsSync(dest)) {
  const destVersion = JSON.parse(fs.readFileSync(path.join(dest, 'package.json'), 'utf8')).version
  if (destVersion === srcVersion) {
    console.log(`[patch-postcss] already at ${srcVersion}, nothing to do`)
    process.exit(0)
  }
  fs.rmSync(dest, { recursive: true, force: true })
}

fs.cpSync(src, dest, { recursive: true })
const patched = JSON.parse(fs.readFileSync(path.join(dest, 'package.json'), 'utf8')).version
console.log(`[patch-postcss] patched next/node_modules/postcss: 8.4.31 -> ${patched}`)
