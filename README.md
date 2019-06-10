# How Design Systems Improve Your Design & Engineering Process
> [Maritime DevCon 2019](https://maritimedevcon.ca/) - Lightning Talk

This example repo has shows how Storybook can integrate with your Lerna components packages and how to publish each component package to NPM

## How To Use

To get started, I would recommend to do the following.
1. `yarn install`
2. `yarn storybook`

When you are ready to try out publishing, follow these steps.
1. Make sure you are logged into npm on the command line `npm login`
2. Change the package name and package version for the button component (you cannot push to my namespace)
3. `git add .` stage all changes
4. `yarn commit` commit tool to create consistent commits
5. `npx lerna-wizard` and this will prompt you on the steps to publish your repo.

If you face any issues with the storybook, you may need to *boostrap* the application by running `npx lerna-wizard` and chosing bootstrap.

Any other issues, fell free to message me :)

## Improvements

- Build the code to ES5 so it can be ingested in other applications (currently shipping JSX code)
