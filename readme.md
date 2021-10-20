<p align="center">
  <a href="https://template-www.tnez.dev">
    <img src="logo.png" width="200">
  </a>
</p>

<h1 align="center">
  Template
</h1>

<p align="center">
  This is where you will put the one-line description of your awesome project.
</p>

<p align="center">
  <a href="https://www.tnez.dev">
    <img alt="" src="https://img.shields.io/badge/Made%20By-tnez%2Edev-inactive.svg?style=for-the-badge">
  </a>

  <a href="https://template-www.tnez.dev">
    <img alt="" src="https://img.shields.io/badge/Deployed%20At-template--www.tnez.dev-inactive?style=for-the-badge">
  </a>

  <a href="#getting-started">
    <img alt="" src="https://img.shields.io/badge/Get%20Started-inactive?style=for-the-badge">
  </a>

</p>

<br>

## Summary and features

Here you will put a more detailed description of the project.

- project goals
- important features

## Getting started

### Install system dependencies

To get going with this project you will need to install the following software:

- [Node (LTS)](https://nodejs.org)
- [overmind](https://github.com/DarthSim/overmind): enables running end-to-end tests and development server in parallel

### Install project dependencies

Install project dependencies with: `npm ci` ([clean-install](https://docs.npmjs.com/cli/v7/commands/npm-ci))

_Note: if you run into issues with `npm ci`, you can try `npm install`._

### Verify everything is working as expected

- Run unit tests: `npm test`
- Run end-to-end tests: `npm run cypress:open`

### Running the development server

- I typically use the end-to-end test runner while developing: `npm run cypress:open`
- But, if you prefer, you can forego the **e2e** and run the development server on its own: `npm run dev`
