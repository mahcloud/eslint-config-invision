
[ ![Codeship Status for InVisionApp/eslint-config-invision](https://codeship.com/projects/adfb9760-0a34-0134-c5ef-0e5eddf2fc4b/status?branch=master)](https://codeship.com/projects/155507)

![Team: Engineering Velocity](https://img.shields.io/badge/team-engineering_velocity-lightgrey.svg)
[![Slack: #eslint](https://img.shields.io/badge/slack-%23eslint-blue.svg)](https://invisionapp.slack.com/messages/eslint/)

[![npm version](https://badge.fury.io/js/eslint-config-invision.svg)](https://badge.fury.io/js/eslint-config-invision)

[![Dependency Status](https://david-dm.org/InVisionApp/eslint-config-invision.svg)](https://david-dm.org/InVisionApp/eslint-config-invision)
[![devDependency Status](https://david-dm.org/InVisionApp/eslint-config-invision/dev-status.svg)](https://david-dm.org/InVisionApp/eslint-config-invision#info=devDependencies)

[Release History](https://github.com/InVisionApp/eslint-config-invision/releases)

# Overview

The lint rules defined here are shared via [a public NPM module named `eslint-config-invision`](https://www.npmjs.com/package/eslint-config-invision). This allows us to have a common set of rules across multiple code repositories, without having to copy/paste those rules everywhere. See ["ESLint's Sharable Configs article"](http://eslint.org/docs/developer-guide/shareable-configs) for more details.

## Basics

There are quite a few rules in our ESLint config. To help summarize, the major code guidelines are:

* Use semicolons at the end of each statement.
* Use double quotes.
* Use tabs for indention.
* [Use multiple `var` declarations](http://benalman.com/news/2012/05/multiple-var-statements-javascript/).

## Discussion

For discussion of rules or any other lint topic, check out the InVision #eslint Slack channel.

## Installation and Usage

[Detailed information with an example folder/file setup is available in the examples\repo folder](https://github.com/InVisionApp/eslint-config-invision/tree/master/examples/repo).

## Testing

[Detailed overview of how testing works for this repo](http://engineering.invisionapp.com/post/testing-eslint/).

## Lint Variations

By default, the environment is set to `node`. However, in some code repositories, both browser and Node.js code co-exist.

To help keep linting more specific to the environment, additional files (`browser.js`, `react.js`) are available that have specific definitions.

To use one of these files, change the `extends` property value in your `.eslintrc` file to be `"eslint-config-invision/name-of-file-here"` (e.g.  `"eslint-config-invision/browser"`).

If you have a specific folder for these assets, you can also create a second `.eslintrc` file for that directory that includes this change.

Right now, there are three lint variations:
- Node: `eslint-config-invision`
- Browser: `eslint-config-invision/browser`
- React: `eslint-config-invision/react` (extends Node)

## Rule Development

When modifying the rules, it's helpful to test them locally against an existing project. [Using `npm link`](https://github.com/InVisionApp/guides/tree/master/protocol/node#use-local-npm-module-for-testing) can allow for this type of local development.

In this repo's folder, run `npm link`. In the folder of the project you want to run lint on, run `npm link eslint-config-invision`.

## Commits

To help generate meaningful changelogs, this repo follows [git commit message conventions](https://github.com/InVisionApp/guides/tree/master/style/git#commit-message-conventions).

## Releases

Releases are handled through [our standard NPM versioning process](https://github.com/InVisionApp/guides/tree/master/protocol/node#publishing-changes).

The majority of changes will be patch or minor. There may be many minor changes in a row, as the nature of the changes will likely be breaking.
