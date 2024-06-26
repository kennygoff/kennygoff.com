/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it means we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 28,
    },
  },
};
