# Demo Repo

This folder contains all the files needed to set up ESLint in your project. 

## Installation

1. Run `npm install --save-dev eslint-config-invision` in your project.
2. Create an [.eslintrc](./.eslintrc) file in the root of the project.
3. Ignore any folders/files via [an .eslintignore file](./.eslintignore)
4. Create a task to run eslint. This can be done in [your package.json file](./package.json#L5) or through [a more custom build task](#lint-integration) (e.g. gulp or webpack).
5. (Optional) Add [a pre-push git hook](#pre-push-git-hook) to lint before committing code. 

### File Explanation

#### `.eslintrc`

The base ESLint file which extends the common rules. [Overrides to linting rules can be added here](#transitioning-projects). See [the ESLint rules doc](http://eslint.org/docs/rules/) for specific information on each rule.

#### `.eslintignore`

Used to tell ESLint to ignore certain folders and files. Not required. [More details are available on the ESLint website](http://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).

#### `package.json`

You should already have this file in your repo. The `devDependencies` information will have been automatically added during the `npm install` command in step 2 of the install instructions. 

The `scripts` information is added by hand, and can be customized to fit your needs. You can run the example script with `npm run lint`. NPM has some good docs on '[How npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts)' 

### Transitioning Projects

Because a lot of code has already been written, there are likely many instances where lint fails due to inconsistencies in code style.

To help with the transition, feel free to override these rules by setting the rule to either a warning (`1`) or ignoring it completely (`0`) (can be helpful when you want to focus solely on errors).

Here's an example:

```
{
    "extends": "eslint-config-invision",
    "rules": {
        "no-mixed-requires": 1,
        "one-var": 1,
        "quotes": [1, "single", "avoid-escape"],
        "no-use-before-define": 0,
        "eol-last": 1,
        "indent": 0
    }
}
```

Once you're in a better state, remove each override and fix the resulting errors until you're override free :confetti_ball:.

#### Fixing Quotes/Indention/EOL errors

There are a few tools available to quick resolve some of the common errors. Do validate the changes to make sure nothing unexpected happened.

##### Add newlines to the end of files

`find . -iname '*.js*' -type f -exec sed -i '' 's/[[:space:]]\{1,\}$//' {} \+`

##### Replace 4 spaces with tabs

`find . -path ./node_modules -prune -o -name '*.js*' ! -type d -exec bash -c 'unexpand -t 4 "$0" > /tmp/e && mv /tmp/e "$0"' {} \;`

You can change the `4` in that statement to `2` if you use two spaces for indention.

##### Replace single-quotes with double-quotes

`npm install -g change-quotes`

`find . -path ./node_modules -prune -o -iname '*.js*' -type f -exec change-quotes --type double {} \;`

### pre-push git hook

To help encourage linting, it's useful to add a git pre-push hook which will lint your code before allowing it to be push to the GitHub repo.

To do this, install [the `pre-git` module](https://github.com/bahmutov/pre-git), which allows you to easily manage [git hooks](https://www.atlassian.com/git/tutorials/git-hooks/local-hooks).

`npm install --save-dev pre-git`

Then add the following to your package.json file:

```
"pre-push": "npm run lint"
```

Now when code is being pushed to github, it will first be linted to validate no syntax errors were introduced.

### Editor Integration

ESLint works best when integrated in to the code editor, so that errors appear inline with the code. The [ESLint user guide covers integrations well](http://eslint.org/docs/user-guide/integrations.html).


