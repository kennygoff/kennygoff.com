// This is necessary for Netlify Functions otherwise a 5s delay happens
// https://github.com/kennygoff/kennygoff.com/issues/9
// https://github.com/kennygoff/kennygoff.com/issues/18
// See https://github.com/kennygoff/kennygoff.com/commit/f7e05751313fc4d88a3441bb8f6c50210b78b7ee
export { handleRequest as default } from "@netlify/remix-adapter";
