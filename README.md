# @musica-sacra/web-plugins

ReactJS library for web applications gathered under organisation MusicaSacaOrg

## Setup

`npm install`

## Testing

For testing purposes, there is local instance of storybook.

`npm run storybook`

This will run storybook instance on port 6006.

## Workflow

To publish a new version of a package:

1. Checkout to branch from main.
2. Make your changes, commit and push them.
3. Run `npm run changeset` and push the generated changeset file.
4. GithubActions will check eslint and build (per-branch build is under construction).
5. Merge.
6. After you merge, locally checkout to `main` branch.
7. Pull changes from remote.
8. Run `npm run release`, this will publish your package on npm under new version.
9. Done.