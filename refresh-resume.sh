#!/bin/bash
set -e
npm update jsonresume-theme-paper
npx resumed render --theme paper
node export-pdf.mjs
mv resume.html public/
mv resume.pdf public/
