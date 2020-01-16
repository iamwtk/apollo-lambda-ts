/**
 * Lambda wrapper for ApolloServer
 */
"use strict";
const server = require("./dist/server").default;

exports.handler = server.createHandler();
