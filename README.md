# Easy MERN Stack <!-- omit in toc -->

![MERN](media/mern.png "MERN")

An easy to use full-stack MERN project: [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node.js](https://nodejs.org/en/)

Client React app scaffolded with [create-react-app](https://github.com/facebook/create-react-app)

Monorepo project components (client, server, shared) integrated with [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

## Contents <!-- omit in toc -->
- [Quick Start](#quick-start)
  - [Configure](#configure)
  - [Run](#run)
  - [Deploy](#deploy)
- [Yarn Scripts (package.json)](#yarn-scripts-packagejson)
- [Project Structure](#project-structure)
- [Client](#client)
- [Server](#server)
- [Development Tools](#development-tools)
- [License](#license)

## Quick Start

### Configure

1. Install [Node.js](https://nodejs.org/en/)

2. Install [Yarn](https://yarnpkg.com/en/)

3. Install [nodemon](https://github.com/remy/nodemon) package globally:

    ```
    yarn global add nodemon
    ```

4. Install server and client packages:

    ```
    yarn install
    ```

5. Install [MongoDB](https://www.mongodb.com/download-center/community)

### Run

1. Ensure [MongoDB](https://www.mongodb.com/) is running on `mongodb://localhost:27017` (or change the `const mongoUrl` line in `server/src/index.js` to point to your MongoDB server)

2. In the project root directory, start the server and client:

    ```
    yarn start
    ```

_Note: In development the client app will be served by create-react-app (webpack dev server) and the proxy entry in the client app's `package.json` will pass any api requests to the node server._

### Deploy

1. Build project:
    ```
    yarn build
    ```

2. Deploy `build` directory

3. Start node server:
    ```
    node main.js
    ```

4. Navigate your browser to http://localhost:5000

## Yarn Scripts (package.json)

I have included some helper scripts as part of the `package.json` to reduce the need to `cd` in and out of the client and server directories:

| Script | Result |
| --- | --- |
| `yarn run client` | starts the client app |
| `yarn run server` | starts the server |
| `yarn start` | starts the server and client app concurrently |
| `yarn client-build` | builds the client app |
| `yarn server-build` | builds the server app |
| `yarn build` | builds the server and client app, then copies both to the root build directory for deployment |
| `yarn client-add <package>` | adds a package to the client app |
| `yarn server-add <package>` | adds a package to the server |
| `yarn shared-add <package>` | adds a package to the shared module |
| `yarn client-remove <package>` | removes a package from the client app |
| `yarn server-remove <package>` | removes a package from the server |
| `yarn shared-remove <package>` | removes a package from the shared module |

## Project Structure

```
+-- .vscode                 # vs code configuration
|
+-- build/                  # project builds to here
+-- packages/               # yarn workspaces
|   +-- app/                    # react client app
|   |   +-- build/                  # client builds to here
|   |   +-- public/                 # static resources
|   |   +-- src/                    # client source
|   |   |   +-- apis/                   # apis for models to communicate with server
|   |   |   +-- components/             # react components
|   |   |
|   |   +-- .env                    # allows absolute paths for imports
|   |   +-- jsconfig.json           # vscode config for js project
|   |   +-- package.json            # yarn package config
|   |   +-- README.md               # create-react-app generated readme
|   |   +-- yarn.lock               # yarn package lock file
|   |
|   +-- server/                 # node web server + api
|   |   +-- build/                  # server builds to here
|   |   +-- src/                    # server source
|   |   |   +-- apis/                   # registers api endpoints
|   |   |   +-- models/                 # mongoose data models
|   |   |   +-- index.js                # server config
|   |   |
|   |   +-- package.json            # server yarn package config
|   |
|   +-- shared/                 # shared project modules
|       +-- api-endpoints/          # describes api endpoints (urls)
|
+-- tools/                  # project build tools
+-- LICENSE                 # MIT license
+-- package.json            # project yarn package config
+-- README.md               # this readme file
+-- yarn.lock               # yarn package lock file
```

## Client

* [React](https://reactjs.org/)
    * Web client
* [Axios](https://github.com/axios/axios)
    * AJAX requests

## Server

* [Node.js](https://nodejs.org/en/)
    * Server platform
* [Express](https://expressjs.com/)
    * Web server
* [MongoDB](https://www.mongodb.com/)
    * Database server
* [Mongoose](https://mongoosejs.com/)
    * Server-side data models

## Development Tools

* [Yarn](https://yarnpkg.com/en/)
    * Package manager and script runner
* [Nodemon](https://github.com/remy/nodemon)
    * Monitors and restarts node server when source changes
* [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
    * Runs multiple commands concurrently
* [Monopack](https://github.com/flegall/monopack)
    * Server-side build tool

## License

This project is licensed under the [MIT open source license](/LICENSE).
