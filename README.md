This is boilerplate project for AZ. Same project skeleton will be replicated for all 3 applications

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
This will start node mock server at port 5000 and run React application on port 3000. <br>
Both the servers will watch for change and will do live reload.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run build:qa`

Builds the app for qa to the `build` folder.<br>

### `npm run start:server`

This will run only the node server and API's can be accessed via application or Postman

### `npm run start:server`

This will run only the node server and API's can be accessed via application or Postman

### `npm run coverage`

This will run code coverage and generate the report inside the coverage directory at project root

### `npm run lint`

This will run linting on all js files and show the lint errors

### Code Splitting

Code splitting will be done using lazy and Sespense features. This will be done once dev progresses. POC is done and it works well.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### HTTPS

Both node and webpack dev server will run in https mode. Please add rootCA.pem file in keychain and mark as always trusted. Similarly, once the webpack dev server is opened for the first time, download the certificate and mark as trusted in keychain

## Guidelines

Following guidelines need to be followed during development

- Please use command `yarn commit` while doing code commit. This will run linting before commit and won't allow to push code if any linting issues are there. Also this will ensure to add proper commit messages while pushing code

- Do not use hardcoded string anywhere inside .js/.jsx files, that will throw error in lint. Please use texts from translation files

- Do not use hardcoded constant values in individual .js/.jsx files. Please add those in config/constants.js files

- All constants should be added in config/constants.js file

- All the API routes should be added in config/api-config.js file

- All the PR's will run through Circle CI and if any linting or test cases fail, the PR can't be merged
