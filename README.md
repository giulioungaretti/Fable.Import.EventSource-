# Fable 2.1 Minimal App

This is a simple Fable 2.1 app that uses js interop
to have an SSE event source interface to work with in f#.

## Requirements

- [dotnet SDK](https://www.microsoft.com/net/download/core) 2.1 or higher
- [node.js](https://nodejs.org) with [npm](https://www.npmjs.com/)
- a server that sends SSE events at some port

## Building and running the app

- Install JS dependencies: `npm install`
- Start Webpack dev server: `npm start`
- Start a SSE server from the server folder: 'node server.js'
