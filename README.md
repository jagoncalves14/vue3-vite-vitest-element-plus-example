# Vue3 + Vite + Vitest + ElementPlus Demo

This repository is for reproducing the [following issue](https://github.com/element-plus/element-plus/issues/4923) that shows that ElementPlus doesn't work with Vitest.

## What is the issue?

When running Vitest's script for running the unit tests, the following error is displayed:

`Error: Cannot find module '/home/projects/github-64cnue/node_modules/lodash/isEqual' imported from /home/projects/github-64cnue/node_modules/element-plus/es/components/time-picker/src/common/picker.mjs Did you mean to import lodash/isEqual.js?`

## How to replicate the issue?

1. Open the [StackBlitz Demo ⚡️](https://stackblitz.com/edit/github-64cnue)

2. Run the following script `npm run test`
