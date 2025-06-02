# Games e-commerce

This repository contains an Angular-based e-commerce application for games, featuring a mock backend powered by JSON Server.
The solution on the `main` branch was implemented using the 'traditional' approach, without signals. The `signal-migration` branch contains a migration of the project to use signals (excluding tests).

## Features

- Browse games
- Shopping cart
- Mock REST API using JSON Server

## Prerequisites

- Node.js (version ^18.19.1 || ^20.11.1 || ^22.0.0)
- Angular CLI (version ^19.0.0)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies

```bash
npm install
```

## Running the Application

1. Start the JSON Server.
   This project uses JSON Server as a mock backend. The server reads data from a db.json file and exposes RESTful endpoints.

To start the JSON Server, run:

```bash
npm run json-server
```

By default, this will start the mock API at http://localhost:3000/.

2. Start the Angular Development Server
   In a separate terminal, run:

```bash
npm run start
```

The Angular app will be available at http://localhost:4200/ and will automatically reload on code changes.

## JSON Server Setup

The `db.json` file in the project root contains sample data for products (games) and banner.

Endpoints will be available at:

```
/products
/banner
```

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

## Other

In the `COMMENTS.md` file, you can find the comments on the project implementation.
