# Shift React

Shift React is a boilerplate for Shift Lab, with a lot of our standards baked in.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Some notable things that were changed in the base create-react-app app:
 - styled-components for styling
 - A CSS Reset (https://meyerweb.com/eric/tools/css/reset/)
 - Prettier and Husky
 - .editorconfig and .eslintrc
 - We removed the standard service workers

## Using this boilerplate

You're most likely starting a new project using this project as a starting point. The following
are instructions to do so.

### Clone the project

Clone the project, using your new project name; "my-new-project", for example.

```
$ git clone git@github.com:shiftlab/shift-react.git my-new-project
```

### Remove existing git metadata

```
cd my-new-project
rm -r .git
```

### Update Readme

Remove this "Using this boilerplate" section from the README and rename the title at the top

### Add new remote

Add a new remote for a new github repository

```
git remote add git@github.com:shiftlab/my-new-project.git master
git push --set-upstream origin master
```

## Getting started

### Install dependencies

Make sure you have [Yarn](http://yarnpkg.com/) installed and then run `yarn` to install dependencies.

```bash
$ yarn
```

## Available commands

- `yarn start` - Runs the app in development mode, at [http://localhost:3000](http://localhost:3000)
- `yarn test` - Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.
- `yarn build` - Builds the app for production to the `build` folder.
- `yarn eject` - If you need a more advanced webpack config, you can `eject` at any time.
- `yarn prettier` - Format code
- `yarn lint` - Lint code

## Technologies and Modules

* create-react-app - https://github.com/facebookincubator/create-react-app
* Yarn - http://yarnpkg.com/
* Jest - https://facebook.github.io/jest/
* Prettier - https://prettier.io/
* EditorConfig - http://editorconfig.org/
* ESLint - https://eslint.org/
* Husky - https://github.com/typicode/husky
* Styled-components - https://www.styled-components.com/
* Eric Meyer Reset - https://meyerweb.com/eric/tools/css/reset/

### create-react-app

This project was created with create-react-app. This abstracts away a lot of the more complicated parts of react project,
particularly the webpack configuration. It also simplifies the upgrade path for projects in the future, as we can simply
update the "react-scripts" package in order to leverage the latest and greatest configuration from react.

### Yarn in Brief

Yarn is an alternative to NPM that provides faster installation times, better dependency version control via lockfiles, and offline caching capabilities. Here are a few commands for using Yarn.

```bash
# Install a dependency (npm install --save)
$ yarn add [package]

# Install a development dependency (npm install --save-dev)
$ yarn add -D [package]

# Uninstall a package (npm uninstall --save)
$ yarn remove [package]

# Run a script from your package.json (npm run [script-name])
$ yarn [script-name]
```

### Prettier, Husky, and ESLint

This project uses "prettier" code formatter to automatically format code to a standard format.

"prettier" can be run manually with `yarn prettier`, but it is additionally run in a pre-commit hook before code
 is pushed to source control. "Husky" is used to wire up those pre-commit hooks.

 This project also uses "ESLint" for linting, and it simply lints code to the standard
 "prettier" format.

# mapbox-gl-demo
